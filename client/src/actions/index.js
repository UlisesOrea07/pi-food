export const RECIPE_DETAIL_SUCCESS = 'RECIPE_DETAIL_SUCCESS';
export const DIETS_SUCCES = 'DIETS_SUCCES';
export const POST_SUCCESS = 'POST_SUCCESS';
const ERROR_RECIPE = 'ERROR_RECIPES';
export const SUCCESS = 'SUCCESS';
export const LOAD = 'LOAD';
export const ERROR = 'ERROR';
const ORDERAZ = 'ORDERAZ'
const BASEURL = 'http://localhost:3001'

export const getRecipes = (title) => {
    return function (dispatch) {
        try {
            dispatch(
                { type: LOAD }
            )
            return fetch(BASEURL + '/recipes?name=' + title)
                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: SUCCESS,
                        payload: jso
                    })
                });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    }

};

export const getAllRecipes = () => {
    return dispatch => {
        try {
            dispatch(
                { type: LOAD }
            )
            return fetch(BASEURL + '/recipes')
                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: SUCCESS,
                        payload: jso
                    })
                });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    }
};

export const getAllDiets = () => {
    return dispatch => {
        try {
            dispatch(
                { type: LOAD }
            )
            return fetch(BASEURL + '/diets')
                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: DIETS_SUCCES,
                        payload: jso
                    })
                })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
};

export const getRecipeDetail = (id) => {
    return dispatch => {
        try {
            dispatch(
                { type: LOAD }
            )
            return fetch(`${BASEURL}/recipes/${id}`)
                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: RECIPE_DETAIL_SUCCESS,
                        payload: jso
                    })
                });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    }
};
export const postRecipe = (recipe) => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD
            })
            const requesOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipe)
            }
            return fetch(`${BASEURL}/recipe`, requesOptions)

                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: POST_SUCCESS,
                        payload: jso
                    })
                })
        } catch (error) {
            console.log(error + 'eorrroorororor')
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    }

};

export const orderByDiets = (array, prop, diet) => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD,
            })

            array.map(obj => {
                return obj[prop]?.filter(d => diet === d)
            })
            let newArray = [...array]
            dispatch({
                type: SUCCESS,
                payload: newArray
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }

}
export const orderAZ = (array, prop) => {
    array.sort((a, b) => a[prop] - b[prop]);
    // return newArray;
    return dispatch => {
        try {
            dispatch({
                type: ORDERAZ,
                payload: array
            });
        } catch (error) {
            dispatch({
                type: ERROR_RECIPE,
                payload: error,
            });
        }
    }

};
export const update = (array) => {

    let newArray = [...array]
    return dispatch => {
        dispatch({
            type: LOAD
        })
        try {
            dispatch({
                type: SUCCESS,
                payload: newArray
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    }
};

