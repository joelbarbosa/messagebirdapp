import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';
import * as actionsMessage from '../actions/actions_message';

export const configureStore = () => {
  const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
  );
  const actions = {
    rootReducer: bindActionCreators(
      actionsMessage,      
      store.dispatch
    )
  }
  return { store, actions };
}
export default configureStore;