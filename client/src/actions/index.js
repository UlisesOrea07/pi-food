// const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
// const POST_RECIPE = 'POST_RECIPE';
// const INIT = 'INIT';
// const UPDATE = 'UPDATE';
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

export const getRecipeDetail = (id) => {
    return dispatch => {
        try {

            return fetch(`${BASEURL}/recipes/${id}`)
                .then(response => response.json())
                .then(jso => {
                    dispatch({
                        type: GET_RECIPE_DETAIL,
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
// export const postRecipe = (recipe) => {
//     try {
//         return dispatch => {
//             return fetch(`${BASEURL}/recipe`)
//                 .then(response => response.json())
//                 .then(jso => {
//                     dispatch({
//                         type: POST_RECIPE,
//                         payload: jso
//                     })
//                 })
//         }
//     } catch (error) {
//         dispatch({
//             type: ERROR_RECIPE,
//             payload: error,
//         });
//     }
// };

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