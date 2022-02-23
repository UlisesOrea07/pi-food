import React from 'react';
import styled from 'styled-components';
// const srcImg = "https://spoonacular.com/recipeImages/716426-312x231.jpg";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    position: relative;
    padding:0 ;
    border-top: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.377);    
    border-radius: 20px 20px 0 0;
`;
const ImagenBox = styled.div`
    width: 100%;  
    height: auto;
`;
const Image = styled.img`
    width: inherit;    
    border-radius: 20px 20px 0 0;
`;
const InfoBox = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-color: azure;
`;
const TitleBox = styled.div`
    text-align: left;
    margin: 10px;
`;
const TagsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5px;
`;
const Tag = styled.div`
    background-color: blueviolet;
    border-radius: 8px;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: lighter;
    font-size: 12px;
    margin:3px;
    padding: 2px 5px;
`;
const Card = ({ health, score, image, title, diets }) => {
    return (
        <CardContainer>
            <ImagenBox>
                <Image src={image} alt='none' />
            </ImagenBox>
            <InfoBox>
                <span>Health: {health}</span>
                <span>Score: {score}</span>
            </InfoBox>
            <TitleBox>
                {title}
            </TitleBox>
            <TagsBox>
                {
                    diets?.map(diet => <Tag>{diet}</Tag>)
                }
            </TagsBox>
        </CardContainer>
    );
}

export default Card;