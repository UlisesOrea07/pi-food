import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "../Card/Card"

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Cards = () => {
    const recipes = useSelector(state => state.recipesLoaded)
    console.log(recipes)
    return (
        <CardsContainer>
            {
                recipes?.map(recipe =>
                    <Card
                        key={recipe.id}
                        health={recipe.healthScore}
                        score={recipe.spoonacularScore}
                        image={recipe.image}
                        title={recipe.title}
                        diets={recipe.diets}
                    />

                )
            }

        </CardsContainer>
    )
}

export default Cards;