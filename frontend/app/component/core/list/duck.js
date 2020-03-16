import {
  GET,
  LIST,
  DATA,
  SUCCESS,
  FAIL,
} from 'constant/index';
import { GET_PROJECT_LIST_DATA_START } from 'module/project/duck';

const GET_DATA_SUCCESS = GET + LIST + DATA + SUCCESS;
const GET_DATA_FAIL = GET + LIST + DATA + FAIL;

function generateState(diffState={}) {
  const initialState = [
    {
      items: [],
      loading: false
    }
  ];
  return { ...initialState, ...diffState }
}

export default function listCoreReducer(state = generateState(), action={}) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_LIST_DATA_START:
      return generateState({loading: true});
    case GET_DATA_SUCCESS:
      return generateState({
        items: payload.items,
        loading: false
      });
    default:
      return state;
  }
}

// Selectors
export function getListItemsSelector(store, id = 0) {
  return store.list[id].items
}