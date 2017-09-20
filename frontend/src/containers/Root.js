
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

export const Root = ({ store, actions }) => {
  return (
    <Provider store={ store }>
      <AppContainer actions={ actions } />
    </Provider>
  );
}
export default Root;