import { SHOW, HIDE, NAVIGATION } from 'constant';

const SHOW_NAVIGATION = SHOW + NAVIGATION;
const HIDE_NAVIGATION = HIDE + NAVIGATION;

function generateState(diffState = {}) {
  const initialState = {
    isOpen: false,
  };
  return { ...initialState, ...diffState };
}

// Reducer
export default function navigationReducer(state = generateState(), action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_NAVIGATION:
      return generateState({ isOpen: true });
    case HIDE_NAVIGATION:
      return generateState();
    default:
      return state;
  }
}

// Action creators
export function showNavigation() {
  return {
    type: SHOW_NAVIGATION,
  };
}

export function hideNavigation() {
  return {
    type: HIDE_NAVIGATION,
  };
}

// Selectors
export function getIsOpenSelector(store) {
  return store.navigation.isOpen;
}