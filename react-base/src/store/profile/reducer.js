import {
  CHANGE_PROFILE_STATUS,
  CREATE_PROFILE,
  DELETE_PROFILE,
} from "./actions";

const initialState = { profile: [] };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE: {
      return { ...state, profile: [...state.profile, action.payload] };
    }
    case CHANGE_PROFILE_STATUS: {
      const status = action.payload;
      return { profile: status };
    }
    case DELETE_PROFILE: {
    }
    default:
      return state;
  }
};
