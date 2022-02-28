import React from "react";
import styled from "styled-components";
import { letter, bg } from "../theme/colors";

const Body = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: inherit;
    background-color: ${bg};
`;
const TitleBox = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    color: ${letter};
`;

const Subtitle = styled.h3``;

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0;
    width: 100%;
`;
const Section = styled.section`
    display: flex;
    flex-direction: row;
    padding: 1%;
    margin: 1%;
`;
const Side = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5% 0 0;
`;
const ImageBox = styled.div`
    position: relative;
    margin: 0;
    width: inherit;
    height: auto;
`;
const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const DietsBox = styled.div`
    text-align: left;
`;
const SummaryBox = styled.p`
    
`;
const Parraf = styled.p``;

const Details = () => {
    return (
        <Body>
            <Container>
                <TitleBox>
                    <h1>Camarones</h1>
                </TitleBox>
                <Section>
                    <Side>
                        <ImageBox>
                            <img src="https://spoonacular.com/recipeImages/3-556x370.jpg" alt='not found' />
                        </ImageBox>
                        <Subtitle>
                            Information
                        </Subtitle>
                        <InfoBox>
                            <p>Saludable: 100</p>
                            <p>Score: 100</p>
                        </InfoBox>
                        <DietsBox>
                            <Subtitle>
                                Diets:
                            </Subtitle>
                            <ul>
                                <li>
                                    vegan
                                </li>
                            </ul>
                        </DietsBox>

                    </Side>
                    <Side>
                        <SummaryBox>
                            <Subtitle>
                                Summary:
                            </Subtitle>
                            <Parraf>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae libero est consequatur corrupti atque eligendi minima quaerat facere obcaecati inventore eveniet provident praesentium amet distinctio, sapiente saepe quod at!
                            </Parraf>
                        </SummaryBox>
                        <Subtitle>
                            Steps
                        </Subtitle>
                    </Side>

                </Section>


            </Container>
        </Body>

    );
}

export default Details;