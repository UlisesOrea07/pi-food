import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card"
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading";
import SearchBar from "../components/SearchBar/SearchBar"

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
`;
const DivPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const Home = ({ recipes }) => {
    // const recipes = useSelector(state => state.recipesLoaded);
    //pagination
    //const [state, setState] = useState({ currentPage: null, totalPages: null })
    const [currentRecipes, setCurrentRecipes] = useState([]);

    console.log('Recetas:::: ' + currentRecipes)
    // const allRecipes = useSelector(state => state.recipesLoaded)

    const onPageChanged = data => {
        const allRecipes = recipes;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentRecipes = allRecipes.slice(offset, offset + pageLimit);
        // setState({ currentPage, totalPages });
        console.log('antes set' + currentRecipes)
        setCurrentRecipes(currentRecipes);
        console.log('despues set ' + currentRecipes)
    }


    console.log(currentRecipes + 'fuera d efuncion onpage')
    // const { currentPage, totalPages } = state;
    const totalRecipes = recipes.length;
    if (totalRecipes === 0) return <Loading />
    return (
        <>
            <SearchBar recipes={recipes} />
            <CardsContainer>
                {
                    currentRecipes?.map((recipe) =>
                        <Card
                            key={recipe.id}
                            id={recipe.id}
                            health={recipe.healthScore}
                            score={recipe.spoonacularScore}
                            image={recipe.image}
                            title={recipe.title}
                            diets={recipe.diets}
                        />
                    )
                }

            </CardsContainer>
            < DivPagination>
                <Pagination totalRecords={totalRecipes} pageLimit={9} pageNeighbours={1} onPageChanged={onPageChanged} />
            </DivPagination>
        </>

    )
}

export default Home;