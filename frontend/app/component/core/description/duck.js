import {
  GET,
  DESCRIPTION,
  DATA,
  SUCCESS,
  FAIL,
} from 'constant/index';

import { GET_PROJECT_DESCRIPTION_DATA_START } from 'module/project/duck';


const GET_DATA_SUCCESS = GET + DESCRIPTION + DATA + SUCCESS;
const GET_DATA_FAIL = GET + DESCRIPTION + DATA + FAIL;

function generateState(diffState={}) {
  const initialState = {
      item: {},
      loaded: false,
   };
   return { ...initialState, ...diffState }
}

export default function descriptionCoreReducer(state= generateState(), action={}) {
  const { type, payload } = action;

  switch(type) {
    case GET_PROJECT_DESCRIPTION_DATA_START:
      return generateState({loaded: true});
    case GET_DATA_SUCCESS:
      return generateState({
        item: payload.item,
        loaded: false
      });
    default:
      return state;
  }
}

// Action creators

export function getDescriptionDataSuccess(item) {
  return {
    type: GET_DATA_SUCCESS,
    payload: {item}
  };
}

export function getDescriptionDataFail() {
  return {
    type: GET_DATA_FAIL
  };
}

// Selectors
export function getDescriptionItemSelector(store) {
  return store.description.item;
}