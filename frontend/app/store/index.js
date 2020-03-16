import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import navigationReducer from 'module/navigation/duck';
import listCoreReducer from 'core/list/duck';

// Sagas
import projectSaga from 'module/project/saga';

const sagaMiddlewareForProject = createSagaMiddleware();

const store = createStore(
  combineReducers({
    navigation: navigationReducer,
    list: listCoreReducer,
  }),
  applyMiddleware(sagaMiddlewareForProject)
);

sagaMiddlewareForProject.run(projectSaga);

export default store;

