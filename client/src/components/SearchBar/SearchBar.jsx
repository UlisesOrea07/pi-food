import React, { useState } from "react";
import styled from "styled-components";
import { getRecipes, update } from "../../actions";
import { useDispatch } from "react-redux";
import { orderAlphaAsc, orderAlphaDesc, orderScoreAsc, orderScoreDesc } from "../../utils/order";


const Container = styled.div`
    align-items: center;  
    display: flex;
    justify-content: space-evenly;
    position: static;    
`;
const Form = styled.form`
    align-items: center;  
    display: flex;    
    padding: 0;    
    position:relative;
    width: 35%;
`;
const SearchBox = styled.input.attrs({
    type: 'text',
    placeholder: "Search Recipes"
})`    
    border: 0;
    margin-right: 0;
    padding: 2px 0 2px 0;
    background-color: rgba(255, 255, 255, 0.924) ;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.100);   
    border-radius: 1rem 0 0 1rem;   
    font-size: 17px;
    outline: none;
    width:100%;   
`;
const CountResults = styled.h3`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    color: black;
    margin: 0;
`;
const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 0;
    width: 20%;
`;

const SearchButton = styled.button.attrs({
    type: "submit"
})`
	background-color: rgba(255, 0, 0, 0.685);    
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: white;
    border-radius: 0 1rem 1rem 0;    
    padding: 4px 20px 4px 20px;
    
`;

const ButtonOrder = styled.button`
    margin-right: 2%;
    padding: 4px 8px 4px 8px;
    background-color: rgba(255, 0, 0, 0.685);    
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: white;
`;

const Span = styled.span`
    font-family: 'Times New Roman', Times, serif;
    color: #472b2bdc;
    margin-right: 5%;
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
            <Form>
                <SearchBox onChange={e => handleChange(e)} />
                <SearchButton >
                    Buscar
                </SearchButton>
            </Form>
            <CountResults>
                Results: {recipes.length}
            </CountResults>
            <Div>
                <Span>
                    Order By:
                </Span>
                <ButtonOrder onClick={() => orderAlpha()}>
                    A-Z
                </ButtonOrder>

                <ButtonOrder onClick={() => orderScore()}>
                    &uarr; Score &darr;
                </ButtonOrder>
                <ButtonOrder >
                    Health
                </ButtonOrder>
            </Div>

        </Container>
    )
}

export default SearchBar;