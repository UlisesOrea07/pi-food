import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRecipeDetail } from "../../actions";
import Loading from "../Loading/Loading";


const Details = () => {
    // const recipe = useSelector(state => state.recipeDetail);
    // console.log(recipe + 'recipeDetail');
    // const { id } = useParams();
    // console.log(typeof id)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getRecipeDetail(id))
    // })




    // if (!recipe) return <Loading />
    return (
        // <div>
        //     <div>
        //         <div>
        //             <label>
        //                 {recipe.title}
        //             </label>
        //             <img src={recipe.image} alt="Imagen" />
        //         </div>
        //         <div>
        //             <label>
        //                 Summary
        //                 {recipe.summary}
        //             </label>
        //         </div>
        //     </div>

        //     <div>
        //         <label>
        //             HEALT:
        //             {recipe.healthScore}
        //         </label>
        //         <label>
        //             Score:
        //             {recipe.spoonacularScore}
        //         </label>
        //         <div>
        //             {/* {
        //                 recipe.diets?.map(diet => <H2>{diet}</H2>)
        //             } */}
        //         </div>
        //     </div>
        //     <div>
        //         {/* <label>
        //             steps
        //             {recipe.steps?.map(step => <div>{step}</div>)}
        //         </label> */}
        //     </div>
        // </div>
        <h1>hola</h1>
    )
}

export default Details;