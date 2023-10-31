import { ADD_TODO, LOADING, TODO_TOGGLED } from "./Type";

const initialState = {
  isLoading: false
};

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
};

export default loadingReducer;
