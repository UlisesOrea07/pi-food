import React, { useState } from "react";
import styled from "styled-components";
import { getRecipes } from "../../actions";
import { useDispatch } from "react-redux";

const Container = styled.form`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
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
`;

const Button = styled.button.attrs({
    type: "submit"
})`

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
            <SearchBox onChange={e => handleChange(e)} />
            <Button >
                Buscar
            </Button>
        </Container>
    )
}

export default SearchBar;