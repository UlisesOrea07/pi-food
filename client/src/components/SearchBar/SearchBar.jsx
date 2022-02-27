import React, { useState } from "react";
import styled from "styled-components";
import { getRecipes, update } from "../../actions";
import { useDispatch } from "react-redux";
import { orderAlphaAsc, orderAlphaDesc, orderScoreAsc, orderScoreDesc } from "../../utils/order";


const Container = styled.form`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 20px;
    border-bottom: 1px solid;
`;
const SearchBox = styled.input.attrs({
    type: 'text',
    placeholder: "Buscar recipes"
})`    
    float: right;
    padding: 6px;
    border: none;
    font-size: 17px;
    width: 50%;
    outline:none;
`;
// const CountResults = styled.h3`
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//     font-size: 14px;
//     color: black;
// `;
const Div = styled.div`
    display: flex;
    margin: 5px;
    width: 50%;
`;

const SearchButton = styled.button.attrs({
    type: "submit"
})`
	background-color: #c3b74bd3;
    margin: 10px;
    padding: 5px;
`;

const ButtonOrder = styled.button`
    margin: 10px;
    padding: 5px;
`;

const SearchBar = ({ recipes }) => {
    const [state, setState] = useState({ title: '' });
    const [onAlpha, setOnAlpha] = useState(true);
    const [onScore, setOnScore] = useState(true);
    const dispatch = useDispatch();

    const orderAlpha = () => {
        if (onAlpha) {
            dispatch(update(orderAlphaAsc(recipes, 'title')));
            setOnAlpha(!onAlpha)
        } else {
            dispatch(update(orderAlphaDesc(recipes, 'title')));
            setOnAlpha(!onAlpha)
        }
    }

    const orderScore = () => {
        if (onScore) {
            dispatch(update(orderScoreAsc(recipes, 'spoonacularScore')));
            setOnScore(!onScore)
        } else {
            dispatch(update(orderScoreDesc(recipes, 'spoonacularScore')));
            setOnScore(!onScore)
        }

    }


    const handleChange = (event) => {
        setState({ title: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getRecipes(state.title));
    }
    return (
        <Container onSubmit={(e) => handleSubmit(e)}>
            <Div>
                <SearchBox onChange={e => handleChange(e)} />
                <SearchButton >
                    Buscar
                </SearchButton>
            </Div>
            <ButtonOrder onClick={() => orderAlpha()}>
                A-Z
            </ButtonOrder>

            <ButtonOrder onClick={() => orderScore()}>
                &uarr;asc-des&darr;
            </ButtonOrder>
        </Container>
    )
}

export default SearchBar;