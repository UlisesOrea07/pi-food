const GET_RECIPES = 'GET_RECIPES';
const INIT = 'INIT';
const URL = 'http://localhost:3001'

export const getRecipes = (title) => {
    return function (dispatch) {
        return fetch(URL + '/recipes?name=' + title)
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
        return fetch(URL + '/recipes')
            .then(response => response.json())
            .then(jso => {
                dispatch({
                    type: INIT,
                    payload: jso
                })
            })
    }
} 
