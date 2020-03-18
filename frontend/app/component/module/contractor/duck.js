import {
  ENTITY,
  START,
  GET,
  LIST,
  DATA,
  CARD
} from 'constant';

export const GET_CONTRACTOR_LIST_DATA_START = GET + ENTITY.CONTRACTOR + LIST + DATA + START;


// Action creators
export function getContractorListData() {
  return {
    type: GET_CONTRACTOR_LIST_DATA_START
  }
}