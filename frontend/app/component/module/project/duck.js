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

export const GET_PROJECT_LIST_DATA_START = GET + ENTITY.PROJECT + LIST + DATA + START;
export const GET_PROJECT_DESCRIPTION_DATA_START = GET + ENTITY.PROJECT + DESCRIPTION + DATA + START;
export const CREATE_PROJECT_DATA_START = CREATE + ENTITY.PROJECT + DATA + START;
export const DELETE_PROJECT_START = DELETE + ENTITY.PROJECT + START;

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

export function createProjectData(data, history) {
  return {
    type: CREATE_PROJECT_DATA_START,
    payload: {data, history}
  }
}

export function deleteProject(id, history) {
  return {
    type: DELETE_PROJECT_START,
    payload: {id, history}
  }
}