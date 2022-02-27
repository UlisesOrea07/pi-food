import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UL = styled.ul`
    list-style-type: none;    
    margin: 0;
    padding: 0;
`;
const LI = styled.li`
    display: inline;
    margin: 10px;
    padding: 5px;    
`;
const A = styled.a`
    outline: none;
    text-decoration: none;
    padding: 2px 1px 0;
    font-size: 14px;    
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

//Función para crear un rango de numeros
// range(1, 5) === [1,2,3,4,5]
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}
//totalRecords={totalRecipes} pageLimit={9} pageNeighbours={1} onPageChanged={onPageChanged}
const Pagination = (props) => {
    const recipes = useSelector(state => state.recipesLoaded);
    const { totalRecords, pageLimit = 9, pageNeighBours = 0 } = props;
    const _pageLimit = typeof pageLimit === 'number' ? pageLimit : 9
    const _totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
    //pageNeighBours puede ser 0, 1 o 2
    const _pageNeighBours = typeof pageNeighBours === 'number' ? Math.max(0, Math.min(pageNeighBours, 2)) : 0;

    let _totalPages = Math.ceil(_totalRecords / _pageLimit);
    const [state, setState] = useState({ currentPage: 1 });

    const fetchPageNumbers = () => {
        const totalPages = _totalPages;
        const currentPage = state.currentPage;
        const pageNeighBours = _pageNeighBours;
        const totalNumbers = (_pageNeighBours * 2) + 3
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighBours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighBours);
            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
                case (!hasLeftSpill && hasLeftSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    }
    useEffect(() => {
        gotoPage(1);
    }, [recipes])

    const gotoPage = page => {
        const { onPageChanged = f => f } = props;
        const currentPage = Math.max(0, Math.min(page, _totalPages));
        const paginationData = {
            currentPage,
            totalPages: _totalPages,
            pageLimit: _pageLimit,
            totalRecords: _totalRecords
        };
        setState({ currentPage })
        onPageChanged(paginationData);
    }

    const handleClick = page => e => {
        e.preventDefault();
        gotoPage(page);
    }

    const handleMoveLeft = e => {
        e.preventDefault();
        gotoPage(state.currentPage - (_pageNeighBours * 2) - 1);
    }
    const handleMoveRight = e => {
        e.preventDefault();
        gotoPage(state.currentPage + (_pageNeighBours * 2) + 1);
    }

    if (!_totalRecords || _totalPages === 1) return null;
    const { currentPage } = state;
    const pages = fetchPageNumbers();

    return (

        <>
            <UL>
                {pages?.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <LI key={index}>
                            <A href='!#' onClick={handleMoveLeft}>
                                <span>&laquo;</span>
                                <span>Previous</span>
                            </A>
                        </LI>
                    );

                    if (page === RIGHT_PAGE) return (
                        <LI key={index}>
                            <A href='!#' onClick={handleMoveRight}>
                                <span>Next</span>
                                <span> &raquo;</span>

                            </A>
                        </LI>
                    );

                    return (
                        <LI key={index} className={currentPage === page ? 'active' : ''}>
                            <A href='!#' onClick={handleClick(page)}>{page}</A>
                        </LI>
                    );
                })}
            </UL>

        </>
    )

}

export default Pagination;