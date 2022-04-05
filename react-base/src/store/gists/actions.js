import { dataUrl } from "../../constants";

export const GET_GISTS = "GET_GISTS";
export const SET_LOADING_GISTS = "SET_LOADING_GISTS";
export const SET_ERROR_GISTS = "SET_ERROR_GISTS";

export const getGists = (gists) => ({
  type: GET_GISTS,
  gists,
});

export const setLoadingGists = (isLoading) => ({
  type: SET_LOADING_GISTS,
  isLoading,
});

export const setErrorGists = (error) => ({
  type: SET_ERROR_GISTS,
  error,
});

export const getGistsThunk = () => async (dispatch) => {
  dispatch(setLoadingGists(true));
  dispatch(setErrorGists(undefined));
  dispatch(getGists({}));

  try {
    const res = await fetch(dataUrl);
    const gists = await res.json();
    dispatch(getGists(gists));
  } catch (err) {
    dispatch(setErrorGists(err));
  } finally {
    dispatch(setLoadingGists(false));
  }
};
