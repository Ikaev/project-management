import {
  GET,
  LIST,
  DATA,
  SUCCESS,
  FAIL,
} from 'constant';
import { GET_PROJECT_LIST_DATA_START } from 'module/project/duck';

const GET_DATA_SUCCESS = GET + LIST + DATA + SUCCESS;
const GET_DATA_FAIL = GET + LIST + DATA + FAIL;

function generateState(diffState = {}) {
  const initialState = {
      items: [],
      loading: false,
      error: '',
  };
  return {...initialState, ...diffState}
}

export default function listCoreReducer(state = generateState(), action={}) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_LIST_DATA_START:
      return generateState({
        items: [],
        loading: true,
      });
    case GET_DATA_SUCCESS:
      return generateState({ items: payload.items, loading: false });
    case GET_DATA_FAIL:
      return generateState({
        items: [],
        loading: false,
        error: payload.error
      });
    default:
      return state;
  }
}

// Action creators

export function getListDataSuccess(items) {
  return {
    type: GET_DATA_SUCCESS,
    payload: {items},
  }
}

export function getListDataFail(error) {
  return {
    type: GET_DATA_FAIL,
    payload: {error}
  }

}

// Selectors
export function getListItemsSelector(store) {
  return store.list.items
}