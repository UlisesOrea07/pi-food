const initialState = {
    recipesLoaded: []
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
        default: return state;
    }

};
export default rootReducer;