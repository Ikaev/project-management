import {
  ENTITY,
  START,
  GET,
  LIST,
  DATA,
  DESCRIPTION,
  CREATE,
  DELETE
} from 'constant';

export const GET_CONTRACTOR_LIST_DATA_START = GET + ENTITY.CONTRACTOR + LIST + DATA + START;
export const CREATE_CONTRACTOR_DATA_START = CREATE + ENTITY.CONTRACTOR + DATA + START;
export const GET_CONTRACTOR_DESCRIPTION_DATA_START = GET+ ENTITY.CONTRACTOR + DESCRIPTION + DATA + START;
export const DELETE_CONTRACTOR_START = DELETE + ENTITY.CONTRACTOR + START;

// Action creators
export function getContractorListData() {
  return {
    type: GET_CONTRACTOR_LIST_DATA_START
  }
}
export function getContractorData(id) {
  return {
    type: GET_CONTRACTOR_DESCRIPTION_DATA_START,
    payload: {id}
  }
}
export function createContractorData(data, history) {
  return {
    type: CREATE_CONTRACTOR_DATA_START,
    payload: {data, history}
  }
}
export function deleteContractor(id, history) {
  return {
    type: DELETE_CONTRACTOR_START,
    payload: {id, history}
  }
}