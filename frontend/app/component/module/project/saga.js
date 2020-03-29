import { call, put, takeLatest } from 'redux-saga/effects';
import { getListDataSuccess, getListDataFail } from 'core/list/duck';
import { getDescriptionDataSuccess, getDescriptionDataFail } from 'core/description/duck';
import { createDataSuccess, createDataFail } from 'core/create/duck';
import { GET_PROJECT_LIST_DATA_START, GET_PROJECT_DESCRIPTION_DATA_START, CREATE_PROJECT_DATA_START, DELETE_PROJECT_START } from './duck';
import { getProjectListDataRequest, getProjectDescriptionDataRequest, createProjectDataRequest, deleteProjectRequest } from 'api';

function* getProjects() {
  try {
    const { data } = yield call(getProjectListDataRequest);
    yield put(getListDataSuccess(data));
  } catch(error) {
    yield put(getListDataFail(error));
  }
}

function* getProject({ payload }) {
  try {
    const { data } = yield call(getProjectDescriptionDataRequest, payload.id);
    yield put(getDescriptionDataSuccess(data))
  } catch(error) {
    yield put(getDescriptionDataFail());
  }
}

function* createProject({ payload }) {
  try {
    const { data } = yield call(createProjectDataRequest, payload.data);
    const { history } = payload;
    yield put(createDataSuccess());
    history.push(`/projects/${data._id}/description`);
  } catch(error) {
    yield put(createDataFail())
  }
}

function* deleteProject({ payload }) {
  try {
    yield call(deleteProjectRequest, payload.id);
    const { history } = payload;
    history.push(`/projects`);
  } catch(error) {
    console.log(error)
  }
}

function* projectSaga() {
  yield takeLatest(GET_PROJECT_LIST_DATA_START, getProjects);
  yield takeLatest(GET_PROJECT_DESCRIPTION_DATA_START, getProject);
  yield takeLatest(CREATE_PROJECT_DATA_START, createProject);
  yield takeLatest(DELETE_PROJECT_START, deleteProject);
}

export default projectSaga;