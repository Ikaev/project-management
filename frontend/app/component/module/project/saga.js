import { call, put, takeLatest } from 'redux-saga/effects';
import { getListDataSuccess, getListDataFail } from 'core/list/duck';
import { getDescriptionDataSuccess, getDescriptionDataFail } from 'core/description/duck';
import { GET_PROJECT_LIST_DATA_START, GET_PROJECT_DESCRIPTION_DATA_START } from './duck';
import { getProjectListDataRequest, getProjectDescriptionDataRequest } from 'api';

function* getProjects() {
  try {
    const projects = yield call(getProjectListDataRequest);
    yield put(getListDataSuccess(projects));
  } catch(error) {
    yield put(getListDataFail());
  }
}

function* getProject({ payload }) {
  try {
    const project = yield call(getProjectDescriptionDataRequest, payload.id);
    yield put(getDescriptionDataSuccess(project))
  } catch(error) {
    yield put(getDescriptionDataFail());
  }
}

function* projectSaga() {
  yield takeLatest(GET_PROJECT_LIST_DATA_START, getProjects);
  yield takeLatest(GET_PROJECT_DESCRIPTION_DATA_START, getProject)
}

export default projectSaga;