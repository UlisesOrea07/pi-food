import React from 'react';
import styled from 'styled-components';
import { letter, bars, secundary, bg } from "../../theme/colors";
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
    background-color: ${bg};
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
    border-color: ${bars};
    color: ${letter};
`;
const TitleBox = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: left;    
    font-weight: bold;
    margin: 1px 10px 10px 10px;
    color: ${letter};
`;
const TagsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 5px;
`;
const Tag = styled.div`
    background-color: ${secundary};
    border-radius: 8px;
    color: ${bg};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin:3px;
    padding: 2px 5px;
`;
const LINK = styled.a`
    text-decoration: none;
`;
const Card = ({ id, health, score, image, title, diets }) => {
    return (
        <CardContainer>
            <LINK href={`/details/${id}`}>
                <ImagenBox>
                    <Image src={image} alt='image no found' />

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
                        diets?.map(diet => <Tag key={diet}>{diet}</Tag>)
                    }
                </TagsBox>
            </LINK>
        </CardContainer>
    );
}

export default Card;