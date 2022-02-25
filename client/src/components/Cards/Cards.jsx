import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const DivPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const Cards = () => {
    const recipes = useSelector(state => state.recipesLoaded)
    console.log(recipes);
    //pagination
    const [state, setState] = useState({ currentPage: null, totalPages: null })
    const [currentRecipes, setCurrentRecipes] = useState([]);
    // const allRecipes = useSelector(state => state.recipesLoaded)
    console.log(recipes)
    console.log(currentRecipes + 'soy current')
    const onPageChanged = data => {
        console.log('click click')
        const allRecipes = recipes;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        console.log(offset + 'soyyyyyysysysysyy offset')
        const currentRecipes = allRecipes.slice(offset, offset + pageLimit);
        setState({ currentPage, totalPages });
        setCurrentRecipes(currentRecipes);
    }
    const { currentPage, totalPages } = state;
    const totalRecipes = recipes.length;
    console.log(recipes.length)
    console.log('holaa' + currentRecipes + 'paginaaaaassssss')
    if (totalRecipes === 0) return <h2>No hay nada pa mostrar</h2>;
    return (
        <>
            < DivPagination>
                <Pagination totalRecords={totalRecipes} pageLimit={9} pageNeighbours={1} onPageChanged={onPageChanged} />
            </DivPagination>
            <CardsContainer>
                {
                    currentRecipes?.map(recipe =>
                        <Card
                            key={recipe.id}
                            health={recipe.healthScore}
                            score={recipe.spoonacularScore}
                            image={recipe.image}
                            title={recipe.title}
                            diets={recipe.diets}
                        />

                    )
                }

            </CardsContainer>
        </>

    )
}

export default Cards;