import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRecipeDetail } from "../actions";
import Loading from "../components/Loading/Loading";
import { letter, bg, bars, secundary } from "../theme/colors";

const Body = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: ${bg};
`;
const TitleBox = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    color: ${letter};
`;

const Subtitle = styled.h3`
    position: relative ;
    margin-top: 10px;
    padding: 0;
`;

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
`;
const Section = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1%;
    margin: 1%;
`;
const SideRight = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2% 0 0;
`;
const SideLeft = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: column;
    color: ${bg};
    background-color: ${bars};
    margin: 0 2% 0 0;
`;
const ImageBox = styled.div`
    position: sticky;
    margin: 0;
    /* width: 600px; */
    max-width: 400px;
    max-height: 400px;
`;
const Img = styled.img`
    /* width: inherit;   */
    object-fit: fill;
    width: 400px;
    height: 400px;
    border-radius: 20px 20px 0 0;    
`;
const InfoBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
const DietsBox = styled.div`
    text-align: left;
`;
const SummaryBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;
const StepsBox = styled.div`
    margin-left: 10%;  
    padding-bottom: 20px ;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const ListItem = styled.li`
    list-style-type: none;
`;

const Parraf = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
`;

const Details = () => {

    const recipe = useSelector(state => state.recipeDetail);
    const loading = useSelector(state => state.busy);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipeDetail(id))
    }, [dispatch])

    return (
        loading ? <Loading /> :
            <Body>
                <Container>
                    <TitleBox>
                        <h1>{recipe.title}</h1>
                    </TitleBox>
                    <Section>
                        <SideLeft>
                            <ImageBox>
                                <Img src={recipe.image} alt='not found' />
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
                                <ul>
                                    {recipe.diets?.map(diet => {
                                        return <ListItem key={diet}> {diet}</ListItem>
                                    })}
                                </ul>
                            </DietsBox>

                        </SideLeft>
                        <SideRight>
                            <SummaryBox>
                                <Subtitle>
                                    Summary:
                                </Subtitle>
                                <Parraf>
                                    {(recipe.summary)}
                                </Parraf>
                            </SummaryBox>

                        </SideRight>
                    </Section>
                    <StepsBox>
                        <Subtitle>
                            Steps
                        </Subtitle>
                        <ol>
                            {recipe.steps?.map((step, i) => {
                                return <li key={i}> {step}</li>
                            })}
                        </ol>
                    </StepsBox>
                </Container>
            </Body>

    );
}

export default Details;