import { createStore, combineReducers } from 'redux';
import navigationReducer from 'module/navigation/duck';

const store = createStore(
  combineReducers({
    navigation: navigationReducer,
  })
);

export default store;

