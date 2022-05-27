import * as actions from '../types';
const initialState = {
    movies: [],
    page: 1
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MOVIES:
            return { ...state };
        case actions.SET_MOVIES_SUCCESS:
            return {

                ...state,
                movies: action.payload
            };
        case actions.SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state;
    }
}


export default movieReducer;