import {
  ENTITY,
  START,
  GET,
  LIST,
  DATA,
  CARD
} from 'constant';

export const GET_PROJECT_LIST_DATA_START = GET + ENTITY.PROJECT + LIST + DATA + START;


// Action creators
export function getProjectListData() {
  return {
    type: GET_PROJECT_LIST_DATA_START
  }
}