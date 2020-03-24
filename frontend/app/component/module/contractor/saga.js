import { call, put, takeLatest } from 'redux-saga/effects';
import { getListDataSuccess, getListDataFail } from 'core/list/duck';
import { getDescriptionDataSuccess, getDescriptionDataFail } from 'core/description/duck';
import { GET_CONTRACTOR_LIST_DATA_START, GET_CONTRACTOR_DESCRIPTION_DATA_START, CREATE_CONTRACTOR_DATA_START, DELETE_CONTRACTOR_START } from './duck';
import { createDataSuccess, createDataFail } from 'core/create/duck';
import { getContractListDataRequest, getContractorDescriptionDataRequest, createContractorDataRequest, deleteContractorRequest } from 'api';

function* getContractors() {
  try {
    const contractors = yield call(getContractListDataRequest);
    yield put(getListDataSuccess(contractors))
  } catch(error) {
    console.log(error)
  }
}

function* getContractor({ payload }) {
  try {
    const contractor = yield call(getContractorDescriptionDataRequest, payload.id);
    yield put(getDescriptionDataSuccess(contractor));
  } catch(e) {
    yield put(getDescriptionDataFail());
  }
}

function* createContractor({payload}) {
  try {
    const contractor = yield call(createContractorDataRequest, payload.data);
    yield put(createDataSuccess());
    const { history } = payload;
    history.push(`/contractors/${contractor.id}/description`);
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
