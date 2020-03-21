import {
  DATA,
  CREATE,
  SUCCESS,
  FAIL
} from 'constant';
import { CREATE_PROJECT_DATA_START } from 'module/project/duck';

const CREATE_DATA_SUCCESS = CREATE + DATA + SUCCESS;
const CREATE_DATA_FAIL = CREATE + DATA + FAIL;

const generateState = (diffState) => {
  const initialState = {
    loading: false,
  };
  return {...initialState, ...diffState}
};

const formCoreReducer = (state = generateState(), action ={}) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROJECT_DATA_START:
      return generateState({
        loading: true,
      });
    case CREATE_DATA_SUCCESS:
    case CREATE_DATA_FAIL:
      return generateState({
        loading: false,
      });
    default:
      return state;
  }
};

// Action creators

export function createDataSuccess() {
  return {type: CREATE_DATA_SUCCESS}
}
export function createDataFail() {
  return {type: CREATE_DATA_FAIL}
}