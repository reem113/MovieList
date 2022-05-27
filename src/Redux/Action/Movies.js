import * as actions from '../types';
import axios from 'axios';

const baseUrl = 'http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=1';


export const getMovies = () => {
    console.log('getMovies func is succ called');
    return async (dispatch) => {
        dispatch({ type: actions.SET_MOVIES });
        console.log('setMovies action');
        await axios.get(baseUrl)

            .then((response) => {
                getMoviesSuccess(dispatch, response?.data)
            }).catch((err) => alert('error'))
    }
}



const getMoviesSuccess = (dispatch, movies) => {
    console.log('dispatch is starting');
    dispatch({
        type: actions.SET_MOVIES_SUCCESS,
        payload: movies
    })
    console.log('dispatch is well done');
}