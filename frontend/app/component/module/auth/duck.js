import { GET, FAIL, LOGIN, LOGOUT, REGISTRATION, START, SUCCESS, AUTH, ENTITY } from 'constant/index';


export const LOGIN_START = LOGIN + START;
const LOGIN_SUCCESS = LOGIN + SUCCESS;
const LOGIN_FAIL = LOGIN + FAIL;
export const LOGOUT_START = LOGOUT + START;
const LOGOUT_SUCCESS = LOGOUT + SUCCESS;
const LOGOUT_FAIL = LOGOUT + FAIL;
export const GET_AUTH_USER_START = GET + AUTH + ENTITY.USER + START;
const GET_AUTH_USER_SUCCESS = GET + AUTH + ENTITY.USER + SUCCESS;
const GET_AUTH_USER_FAIL = GET + AUTH + ENTITY.USER + FAIL;
export const REGISTRATION_USER_START = REGISTRATION + ENTITY.USER + START;
const REGISTRATION_USER_SUCCESS = REGISTRATION + ENTITY.USER + SUCCESS;
const REGISTRATION_USER_FAIL = REGISTRATION + ENTITY.USER + FAIL;

function generateState(diffState = {}) {
  const initialState = {
    authUser: false
  };
  return { ...initialState, ...diffState }
}

export default function authReducer(state = generateState(), action={}) {
  const {type, payload} = action;
  switch(type) {
    case GET_AUTH_USER_SUCCESS:
    case LOGIN_SUCCESS:
      return generateState({authUser: payload.authUser});
    case LOGOUT_SUCCESS:
      return generateState();
    case GET_AUTH_USER_START:
    case LOGIN_START:
    case LOGIN_FAIL:
    case LOGOUT_START:
    case LOGOUT_FAIL:
    case GET_AUTH_USER_FAIL:
    case REGISTRATION_USER_START:
    case REGISTRATION_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export function getAuthUserAction() {
  return {
    type: GET_AUTH_USER_START
  }
}
export function getAuthUserSuccessAction(authUser) {
  return {
    type: GET_AUTH_USER_SUCCESS,
    payload: {authUser}
  }
}
export function loginStartAction(authInfo, history) {
  return {
    type: LOGIN_START,
    payload: {authInfo, history}
  }
}

export function loginSuccessAction(authUser) {
  return {
    type: LOGIN_SUCCESS,
    payload: {authUser}
  }
}

export function logoutStartAction(history) {
  return {
    type: LOGOUT_START,
    payload: {history}
  }
}
export function logoutSuccessAction() {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function registrationUserStartAction(data, history) {
  return {
    type: REGISTRATION_USER_START,
    payload: {data, history}
  }
}

export function registrationUserSuccessAction() {
  return {
    type: REGISTRATION_USER_SUCCESS
  }
}

// Selectors
export function getAuthUserSelector(store) {
  return store.auth.authUser
}
