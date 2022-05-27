import * as actions from '../types';
const initialState = {
    movies: []
};
const movieReducer = (state = initialState, action) => {
    console.log('reducer is ok');
    switch (action.type) {
        case actions.SET_MOVIES:
            console.log('movies reducer is ok');
            return { ...state };
        case actions.SET_MOVIES_SUCCESS:
            console.log('moviesSucc reducer is ok');
            return {

                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}
export default movieReducer;