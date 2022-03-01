import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bars, bg } from "../../theme/colors";
const Nav = styled.div`
    background-color: ${bars};
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    
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
        </Nav >
    );
}


export default NavBar;