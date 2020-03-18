import { call, put, takeLatest } from 'redux-saga/effects';
import { getListDataSuccess, getListDataFail } from 'core/list/duck';
import { GET_CONTRACTOR_LIST_DATA_START } from './duck';
import { getContractListDataRequest } from 'api';

function* getContractors() {
  try {
    const contractors = yield call(getContractListDataRequest);
    yield put(getListDataSuccess(contractors))
  } catch(error) {

  }

}
function* contractorSaga() {
  yield takeLatest(GET_CONTRACTOR_LIST_DATA_START, getContractors)
}

export default contractorSaga;
