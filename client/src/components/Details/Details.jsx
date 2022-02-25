import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../actions";


const Details = () => {
    const { id } = useParams;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipeDetail(id));
    })
    const recipe = useSelector(state => state.recipeDetail);
    return (
        <div>
            <div>
                <div>
                    <img src={recipe.image} />
                </div>
                <div>
                    <label>
                        Summary
                        {recipe.summary}
                    </label>
                </div>
            </div>

            <div>
                <label>
                    HEALT:
                    {recipe.healthScore}
                </label>
                <label>
                    Score:
                    {recipe.spoonacularScore}
                </label>
                <label>
                    Diets:
                    {recipe.diets?.map(diet => <p>{diet}</p>)}
                </label>
            </div>
            <div>
                <label>
                    steps
                    {recipe.steps?.map(step => <div>{step}</div>)}
                </label>
            </div>
        </div>
    )
}

export default Details;