import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import movieReducer from './Reducer/Movies';

const middleware = [thunk];

const configureStore = () => {
    return createStore(movieReducer, applyMiddleware(...middleware));
}
export default configureStore;