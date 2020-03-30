import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_AUTH_USER_START, LOGIN_START, LOGOUT_START, REGISTRATION_USER_START } from './duck';
import { getAuthUserSuccessAction, loginSuccessAction, logoutSuccessAction, registrationUserSuccessAction } from './duck';
import { getAuthUserRequest, authLoginRequest, authLogoutRequest, registrationUserRequest } from 'api';
import { func } from 'prop-types';

function* getAuthUser() {
  try {
    const { data } = yield call(getAuthUserRequest);
    yield put(getAuthUserSuccessAction(data));
  } catch(e) {

  }
}
function* authLogin({payload}) {
  const { authInfo, history } = payload;
  try {
    const {data} = yield call(authLoginRequest, authInfo);
    yield put(loginSuccessAction(data));
    history.push('/')
  } catch(e) {

  }
}

function* authLogout({payload}) {
  const { history } = payload;
  try {
    yield call(authLogoutRequest);
    yield put(logoutSuccessAction());
    history.push('/')
  } catch(e) {
    throw new Error(e)
  }
}
function* registrationUser({payload}) {
  const { data, history } = payload;
  try {
    yield call(registrationUserRequest, data);
    yield put(registrationUserSuccessAction());
    history.push('/')
  } catch(e) {

  }
}

function* authSaga() {
  yield takeLatest(GET_AUTH_USER_START, getAuthUser);
  yield takeLatest(LOGIN_START, authLogin);
  yield takeLatest(LOGOUT_START, authLogout);
  yield takeLatest(REGISTRATION_USER_START, registrationUser);
}

export default authSaga