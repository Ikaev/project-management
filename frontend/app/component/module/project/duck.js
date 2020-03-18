import {
  ENTITY,
  START,
  GET,
  LIST,
  DATA,
  DESCRIPTION,
  CARD
} from 'constant';

export const GET_PROJECT_LIST_DATA_START = GET + ENTITY.PROJECT + LIST + DATA + START;
export const GET_PROJECT_DESCRIPTION_DATA_START = GET + ENTITY.PROJECT + DESCRIPTION + DATA + START;


// Action creators
export function getProjectListData() {
  return {
    type: GET_PROJECT_LIST_DATA_START
  }
}

export function getProjectData(id) {
  return {
    type: GET_PROJECT_DESCRIPTION_DATA_START,
    payload: {id}
  }
}
