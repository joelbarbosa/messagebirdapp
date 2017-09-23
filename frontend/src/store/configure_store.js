import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from 'reducers/index';

export const configureStore = preloadedState => createStore(
    rootReducers,
    preloadedState,
    applyMiddleware(thunk),
);

export default configureStore;
