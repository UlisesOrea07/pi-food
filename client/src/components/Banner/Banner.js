import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ban from "../../images/ban.jpeg"
import { letter, bars, secundary, bg } from "../../theme/colors";


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
    position: fixed;
    top: 0;
    width: 100%;
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
    color: ${bg};
    font-weight: bold;
    font-family: Lucida Handwriting;
    
`;
const Button = styled.button`
    text-decoration: none;
    background-color: ${secundary};
    color: ${letter};
    padding:10px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    block-size: auto;
    cursor: pointer;
    &:hover{
        background-color: ${bars};
        color: ${bg};
    }
`;
const Banner = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Henry Recipes Food
                </Title>

                <Link to='/home'>
                    <Button >
                        Saber más..
                    </Button>
                </Link>
            </TitleContainer>
        </Container>
    );
}

export default Banner;