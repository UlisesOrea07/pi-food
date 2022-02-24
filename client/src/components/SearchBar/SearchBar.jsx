import React, { useState } from "react";
import styled from "styled-components";
import { getRecipes } from "../../actions";
import { useDispatch } from "react-redux";

const Container = styled.form`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    margin-left: 16px;
    margin-right: 10px;
    font-size: 17px;
    width: 50%;
    outline:none;
`;
const Div = styled.div`
    display: flex;
    margin: 5px;
    width: 50%;
`;

const SearchButton = styled.button.attrs({
    type: "submit"
})`
   	padding: 0;
	background-color: #2ecc71;
	border: none;
	border-radius: 1px; 	
	color: white;
	text-transform: uppercase;
	overflow: hidden; 	
`;

const ButtonOrder = styled.button`
    margin: 10px;
    padding: 5px;
`;

const SearchBar = () => {
    const [state, setState] = useState({ title: '' });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setState({ title: event.target.value })
        console.log(state)
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
            <ButtonOrder>
                A-Z
            </ButtonOrder>

            <ButtonOrder>
                asc-des
            </ButtonOrder>
        </Container>
    )
}

export default SearchBar;