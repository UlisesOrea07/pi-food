import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// const srcImg = "https://spoonacular.com/recipeImages/716426-312x231.jpg";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    position: relative;
    margin: 10px;
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
    margin: 10px;
    display: flex;
    flex-direction: row;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-color: #70757582;
`;
const TitleBox = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: left;    
    font-weight: bold;
    margin: 1px 10px 10px 10px;
`;
const TagsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 5px;
`;
const Tag = styled.div`
    background-color: #79580cc3;
    border-radius: 8px;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: lighter;
    font-size: 12px;
    margin:3px;
    padding: 2px 5px;
`;
const Card = ({ id, health, score, image, title, diets }) => {
    return (
        <CardContainer>
            <ImagenBox>
                <Image src={image} alt='none' />
                <Link to={`/detail/${id}`}>{title}</Link>
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