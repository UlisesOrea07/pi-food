const GET_RECIPES = 'GET_RECIPES';
const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
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
            })
    }
}

// export const getAllRecipes = () => {
//     return dispatch => {
//         dispatch({
//             type: GET_ALL_RECIPES,
//             payload: json
//         })
//     }
// } 