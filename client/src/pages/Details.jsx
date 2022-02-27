import React from "react";
import styled from "styled-components";

const Body = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 5%;
    width: 100%;
    height: inherit;
`;
const TitleBox = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;
const Section = styled.section`
    display: flex;
    flex-direction: row;
    padding: 3%;
    margin: 3%;
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
                        <InfoBox>

                            <p>Saludable: 100</p>
                            <p>Score: 100</p>
                        </InfoBox>
                        <DietsBox>
                            Vegetal
                            carnes
                            Frias
                        </DietsBox>

                    </Side>

                    <SummaryBox>
                        <Parraf>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae libero est consequatur corrupti atque eligendi minima quaerat facere obcaecati inventore eveniet provident praesentium amet distinctio, sapiente saepe quod at!

                        </Parraf>
                    </SummaryBox>
                </Section>

            </Container>
        </Body>

    );
}

export default Details;