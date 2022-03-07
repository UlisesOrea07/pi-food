import { SUCCESS, POST_SUCCESS, DIETS_SUCCES, LOAD, ERROR } from '../actions/index'
const initialState = {
    recipesLoaded: [],
    recipeDetail: {},
    recipeAdded: {},
    dietsLoaded: [],
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
                // recipesLoaded: [],
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
        case POST_SUCCESS:
            return {
                ...state,
                recipeAdded: action.payload,
                busy: false,
                error: null
            }
        case DIETS_SUCCES:
            return {
                ...state,
                dietsLoaded: action.payload,
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