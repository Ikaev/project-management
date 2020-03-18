import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import navigationReducer from 'module/navigation/duck';
import listCoreReducer from 'core/list/duck';
import descriptionCoreReducer from 'core/description/duck';

// Sagas
import projectSaga from 'module/project/saga';
import contractorSaga from 'module/contractor/saga';

const sagaMiddlewareForProject = createSagaMiddleware();
const sagaMiddlewareForContractor = createSagaMiddleware();

const store = createStore(
  combineReducers({
    navigation: navigationReducer,
    list: listCoreReducer,
    description: descriptionCoreReducer,
  }),
  applyMiddleware(sagaMiddlewareForProject, sagaMiddlewareForContractor)
);

sagaMiddlewareForProject.run(projectSaga);
sagaMiddlewareForContractor.run(contractorSaga);

export default store;

