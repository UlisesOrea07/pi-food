import React from "react";
import styled from "styled-components";

const Body = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`;
const Container = styled.div`
    background-color: #9b5555a7;
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 10%;
    position: relative;
    display: block;
    text-align: center;
    align-self: center;
    align-items: center;
`;
const P = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 14px;
`;
const NoRecipes = () => {
    return (
        <Body>
            <Container>
                <P>No Recipes to show</P>
            </Container>
        </Body>

    );
}


export default NoRecipes;