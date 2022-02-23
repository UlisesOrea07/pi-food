import React from "react";
import styled from "styled-components";
import ban from "../../images/ban.jpeg"
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: inherit;
    height: 55vh;
    background-image: url(${ban});
    background-size: cover;
    background-position: center center center ;   
    position: relative;    
`;
const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    font-size: 28px;
    @media (max-width: 640px) {
        font-size: 20px;
    }    
`;
const Title = styled.h1`
    color: #fff;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
`;
const Button = styled.button`
    text-decoration: none;
    background-color: transparent;
    color: #fff;
    padding:10px;
    border: 2px solid red;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    block-size: auto;
    cursor: pointer;
    &:hover{
        background-color: red;
        color: #ff2
    }
`;
const Banner = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Henry Recipes Food
                </Title>
                <Button>
                    Saber más...
                </Button>
            </TitleContainer>
        </Container>
    );
}

export default Banner;