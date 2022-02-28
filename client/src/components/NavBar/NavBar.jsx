import React from "react";
import styled from "styled-components";
import { bars, bg } from "../../theme/colors";
const Nav = styled.div`
    background-color: ${bars};
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    color: ${bg};
`;
const PageName = styled.h1``;
const NavBar = () => {
    return (
        <Nav>
            <PageName>FOOD, RECIPES AND COOCKING</PageName>
        </Nav>
    );
}


export default NavBar;