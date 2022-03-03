import React, { useState } from "react";
import styled from "styled-components";
import { getRecipes, orderAZ, orderByDiets, update } from "../../actions";
import { useDispatch } from "react-redux";
import { orderAlphaAsc, orderAlphaDesc, orderScoreAsc, orderScoreDesc } from "../../utils/order";
import { letter, bars, secundary, bg } from "../../theme/colors";

const Container = styled.div`
    align-items: center;  
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin: 10px;

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
    padding: 2px 0 2px 4px;
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
	background-color: ${bg};    
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: ${letter};
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border-radius: 0 1rem 1rem 0;    
    padding: 4px 20px 4px 20px;
    width: 20% ;    
    cursor: pointer;
`;

const ButtonOrder = styled.button`
    margin-right: 2%;
    padding: 4px 8px 4px 8px;
    background-color: ${bg};    
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: ${letter};
    cursor: pointer;
`;

const Span = styled.span`
    font-family: 'Times New Roman', Times, serif;
    color: #472b2bdc;
    margin-right: 5%;
`;
const Changed = styled.span`
    color: red;
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 14px;
`;
const SearchBar = ({ recipes }) => {
    const [state, setState] = useState({ title: '' });
    const [onAlpha, setOnAlpha] = useState(true);
    const [onScore, setOnScore] = useState(true);
    const [changed, setChanged] = useState('A-Z');
    const [arrow, setArrow] = useState('%E2%86%91 %E2%86%93');
    const dispatch = useDispatch();

    const orderAlpha = (event) => {
        event.preventDefault();
        if (onAlpha) {
            dispatch(update(orderAlphaAsc(recipes, 'title')));
            setOnAlpha(!onAlpha)
            setChanged('A-Z')
        } else {
            dispatch(update(orderAlphaDesc(recipes, 'title')));
            setOnAlpha(!onAlpha)
            setChanged('Z-A')
        }
    }

    const orderScore = (event) => {
        event.preventDefault();
        if (onScore) {
            dispatch(update(orderScoreAsc(recipes, 'spoonacularScore')));
            setOnScore(!onScore)
            setArrow('%E2%86%93 %E2%86%91')
        } else {
            dispatch(update(orderScoreDesc(recipes, 'spoonacularScore')));
            setOnScore(!onScore)
            setArrow('%E2%86%91 %E2%86%93')
        }
    }
    const handleDiets = () => {
        dispatch(orderByDiets(recipes, 'diets', 'pescatarian'))
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
                <ButtonOrder onClick={(e) => orderAlpha(e)}>
                    <Changed>{changed[0]}</Changed> - {changed[2]}
                </ButtonOrder>

                <ButtonOrder onClick={(e) => orderScore(e)}>
                    Score <Changed>{decodeURI(arrow)} </Changed>
                </ButtonOrder>

                <ButtonOrder onClick={() => handleDiets()}>
                    Diets
                </ButtonOrder>
            </Div>

        </Container>
    )
}

export default SearchBar;