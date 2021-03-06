import { FETCH_TODO } from "./action-types";

const defaultState = {
  data: {}
};

// никаких изменений
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
