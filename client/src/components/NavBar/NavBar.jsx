import React from "react";
import styled from "styled-components";
const Nav = styled.div`
    background-color: beige;
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
    padding: 10px;
    width: 99%;
`;
const NavBar = () => {
    return (
        <Nav>
            <p>hfhdsf</p>
            <p>gdfsgdfgdfg</p>
        </Nav>
    );
}


export default NavBar;