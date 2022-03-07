import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRecipeDetail } from "../actions";
import Loading from "../components/Loading/Loading";
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
const SummaryBox = styled.div`
    
`;
const Parraf = styled.p``;

const Details = () => {

    const recipe = useSelector(state => state.recipeDetail);
    const loading = useSelector(state => state.busy);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipeDetail(id))
    }, [dispatch])

    console.log(recipe.steps + 'pasosos')
    console.log('Dietaaa' + recipe.diets)

    return (
        loading ? <Loading /> :
            <Body>
                <Container>
                    <TitleBox>
                        <h1>{recipe.title}</h1>
                    </TitleBox>
                    <Section>
                        <Side>
                            <ImageBox>
                                <img src={recipe.image} alt='not found' />
                            </ImageBox>
                            <Subtitle>
                                Information
                            </Subtitle>
                            <InfoBox>
                                <p>Healthy: {recipe.healthScore}</p>
                                <p>Score: {recipe.spoonacularScore}</p>
                            </InfoBox>
                            <DietsBox>
                                <Subtitle>
                                    Diets:
                                </Subtitle>
                                {/* <ul>
                                    {recipe.diets?.map(diet => {
                                        return <li key={diet}> {diet}</li>
                                    })}
                                </ul> */}
                            </DietsBox>

                        </Side>
                        <Side>
                            <SummaryBox>
                                <Subtitle>
                                    Summary:
                                </Subtitle>
                                <Parraf>
                                    {(recipe.summary)}
                                </Parraf>
                            </SummaryBox>
                            <Subtitle>
                                Steps
                            </Subtitle>
                            <ul>
                                {recipe.steps?.map((step, i) => {
                                    return <li key={i}> {step}</li>
                                })}
                            </ul>
                        </Side>
                    </Section>
                </Container>
            </Body>

    );
}

export default Details;