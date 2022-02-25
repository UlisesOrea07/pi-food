const initialState = {
    recipesLoaded: [],
    recipeDetail: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                recipesLoaded: action.payload
            }
        case 'GET_RECIPES':
            return {
                ...state,
                recipesLoaded: action.payload
            }
        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                recipeDetail: action.payload
            }
        case 'UPDATE':
            return {
                ...state,
                recipesLoaded: action.payload
            }
        default: return state;
    }

};
export default rootReducer;