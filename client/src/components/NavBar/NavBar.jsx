import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bars, bg } from "../../theme/colors";
const Nav = styled.div`
    background-color: ${bars};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    align-text: center;
    padding-bottom: 5px;
    
`;
const A = styled.a`
    text-decoration: none;
    color: ${bg};
`;
const PageName = styled.h1``;
const NavBar = () => {
    return (
        <Nav>
            <PageName><A href='/home' >FOOD, RECIPES AND COOCKING</A></PageName>
            <A href='/add' >Add new recipe</A>
        </Nav >
    );
}


export default NavBar;