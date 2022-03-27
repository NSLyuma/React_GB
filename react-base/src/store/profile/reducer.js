import { DISPLAY_PROFILE } from "./actions";

const initialState = { isShow: false };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_PROFILE: {
      return { isShow: !state.isShow };
    }
    default:
      return state;
  }
};
