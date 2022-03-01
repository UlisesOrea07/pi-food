import { SUCCESS, LOAD, ERROR } from '../actions/index'
const initialState = {
    recipesLoaded: [],
    recipeDetail: {},
    busy: false,
    error: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                recipeDetail: action.payload
            }
        // case 'POST_RECIPE':
        //     return {
        //         ...state,

        //     }

        case 'ORDERAZ':
            return {
                ...state,
                recipesLoaded: action.payload
            }
        case 'ERROR_RECIPE':
            return {
                ...state,
                error: action.payload
            }

        case LOAD:
            return {
                ...state,
                recipesLoaded: [],
                busy: true,
                error: null
            }
        case SUCCESS:
            return {
                ...state,
                recipesLoaded: action.payload,
                busy: false,
                error: null
            }

        case ERROR:
            return {
                ...state,
                recipesLoaded: [],
                busy: false,
                error: action.payload
            }
        default: return state;
    }

};
export default rootReducer;