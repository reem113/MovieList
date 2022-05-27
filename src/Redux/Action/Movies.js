import * as actions from '../types';
import axios from 'axios';
import configureStore from '../Store';


const baseUrl = 'http://api.themoviedb.org/3/discover/movie';


export const getMovies = () => {



    return async (dispatch) => {
        const store = configureStore();

        const page = store.getState().page;
        console.log(page);
        dispatch({ type: actions.SET_MOVIES });
        await axios.get(baseUrl, { params: { api_key: "acea91d2bff1c53e6604e4985b6989e2", page } })

            .then((response) => {
                getMoviesSuccess(dispatch, response?.data)
            }).catch((err) => alert('error'))
    }
}



const getMoviesSuccess = (dispatch, movies) => {
    dispatch({
        type: actions.SET_MOVIES_SUCCESS,
        payload: movies
    })
}

export const setPage = (page) =>
({
    type: actions.SET_PAGE,
    page
})



