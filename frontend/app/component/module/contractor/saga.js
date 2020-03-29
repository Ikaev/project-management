import { call, put, takeLatest } from 'redux-saga/effects';
import { getListDataSuccess, getListDataFail } from 'core/list/duck';
import { getDescriptionDataSuccess, getDescriptionDataFail } from 'core/description/duck';
import { GET_CONTRACTOR_LIST_DATA_START, GET_CONTRACTOR_DESCRIPTION_DATA_START, CREATE_CONTRACTOR_DATA_START, DELETE_CONTRACTOR_START } from './duck';
import { createDataSuccess, createDataFail } from 'core/create/duck';
import { getContractListDataRequest, getContractorDescriptionDataRequest, createContractorDataRequest, deleteContractorRequest } from 'api';

function* getContractors() {
  try {
    const { data } = yield call(getContractListDataRequest);
    yield put(getListDataSuccess(data))
  } catch(error) {

  }
}

function* getContractor({ payload }) {
  try {
    const { data } = yield call(getContractorDescriptionDataRequest, payload.id);
    yield put(getDescriptionDataSuccess(data));
  } catch(e) {
    yield put(getDescriptionDataFail());
  }
}

function* createContractor({payload}) {
  try {
    const { data } = yield call(createContractorDataRequest, payload.data);
    yield put(createDataSuccess());
    const { history } = payload;
    history.push(`/contractors/${data._id}/description`);
  } catch(e) {
    yield put(createDataFail())
  }
}

function* deleteContractor({ payload }) {
  try {
    const { history, id } = payload;
    yield call(deleteContractorRequest, id);
    history.push(`/contractors`)
  } catch(e) {
    console.log(e)
  }
}

function* contractorSaga() {
  yield takeLatest(GET_CONTRACTOR_LIST_DATA_START, getContractors);
  yield takeLatest(GET_CONTRACTOR_DESCRIPTION_DATA_START, getContractor);
  yield takeLatest(CREATE_CONTRACTOR_DATA_START, createContractor);
  yield takeLatest(DELETE_CONTRACTOR_START, deleteContractor);
}

export default contractorSaga;
