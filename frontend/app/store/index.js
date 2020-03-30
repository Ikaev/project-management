import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import navigationReducer from 'module/navigation/duck';
import listCoreReducer from 'core/list/duck';
import descriptionCoreReducer from 'core/description/duck';
import authReducer from 'module/auth/duck';

// Sagas
import projectSaga from 'module/project/saga';
import contractorSaga from 'module/contractor/saga';
import authSaga from 'module/auth/saga';

const sagaMiddlewareForProject = createSagaMiddleware();
const sagaMiddlewareForContractor = createSagaMiddleware();
const sagaMiddlewareForAuth = createSagaMiddleware();

const store = createStore(
  combineReducers({
    auth: authReducer,
    navigation: navigationReducer,
    list: listCoreReducer,
    description: descriptionCoreReducer,
  }),
  applyMiddleware(sagaMiddlewareForProject, sagaMiddlewareForContractor, sagaMiddlewareForAuth)
);

sagaMiddlewareForProject.run(projectSaga);
sagaMiddlewareForContractor.run(contractorSaga);
sagaMiddlewareForAuth.run(authSaga);

export default store;

