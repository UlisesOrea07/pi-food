import React from "react";
import styled from "styled-components";
const Nav = styled.div`
    background-color: beige;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
`;
const PageName = styled.h1``;
const NavBar = () => {
    return (
        <Nav>
            <PageName>FOOD, RECIPES AND COCKING</PageName>
        </Nav>
    );
}


export default NavBar;