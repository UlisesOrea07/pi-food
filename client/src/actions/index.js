const GET_RECIPES = 'GET_RECIPES';
const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
const INIT = 'INIT';
const UPDATE = 'UPDATE';
const BASEURL = 'http://localhost:3001'

export const getRecipes = (title) => {
    return function (dispatch) {
        return fetch(BASEURL + '/recipes?name=' + title)
            .then(response => response.json())
            .then(jso => {
                dispatch({
                    type: GET_RECIPES,
                    payload: jso
                })
            });
    }
}

export const getAllRecipes = () => {
    return dispatch => {
        return fetch(BASEURL + '/recipes')
            .then(response => response.json())
            .then(jso => {
                dispatch({
                    type: INIT,
                    payload: jso
                })
            })
    }
}

export const getRecipeDetail = (id) => {
    return dispatch => {
        return fetch(BASEURL + '/recipes/' + id)
            .then(response => { response.json() })
            .then(jso => {
                dispatch({
                    type: GET_RECIPE_DETAIL,
                    payload: jso
                })
            })
    }
}

export const update = (array) => {
    return dispatch => {
        dispatch({
            type: UPDATE,
            payload: array
        })
    }
}