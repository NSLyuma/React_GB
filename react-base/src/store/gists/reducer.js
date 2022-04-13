import { GET_GISTS, SET_ERROR_GISTS, SET_LOADING_GISTS } from "./actions";

const initialState = {
  gists: [],
  isLoading: false,
  error: undefined,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS: {
      return {
        ...state,
        gists: state.gists,
      };
    }
    case SET_LOADING_GISTS: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case SET_ERROR_GISTS: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
