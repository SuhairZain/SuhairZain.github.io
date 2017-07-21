import { combineReducers, createStore } from 'redux';

import ui from './ui';

export default createStore(
  combineReducers({
    ui,
  })
);
