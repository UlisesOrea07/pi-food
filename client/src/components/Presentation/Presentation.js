import React from "react";
import styled from "styled-components";
import presentation from "../../images/presentation.jpg"

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15%;
    padding: 20px;
    display: flex;
    width: 100%;
`;
const Title = styled.h1`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 30px;
`;
const Div = styled.div`
    display: flex;
    padding-right: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
`;
const ImgBox = styled.div`
    margin: 0;
    align-items: center;
    border-radius:10px;
`;
const P = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
`;
const Presentation = () => {
    return (
        <Container>
            <Title>App recipes</Title>
            <Div>
                <ImgBox>
                    <img src={presentation} width="50%" />
                </ImgBox>
                <P>
                    Our knowledge engineers spent years crafting our complex food ontology, which allows us
                    to understand the relationships between ingredients, recipes, nutrition, allergens, and more.

                    We understand "nut free" muffins can't contain pecans
                    (even if the recipe doesn't mention "nuts" anywhere!) and we automatically determine
                    that a recipe with Worcestershire sauce isn't vegetarian (we're looking at you, anchovies.)
                </P>

            </Div >
        </Container>

    );
}

export default Presentation;