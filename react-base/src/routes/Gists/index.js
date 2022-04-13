import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGistsThunk } from "../../store/gists/actions";
import {
  getErrorGists,
  getGistsFromState,
  getIsLoadingGists,
} from "../../store/gists/selectors";
import { GistsPresenter } from "./GistsPresenter";

export const Gists = () => {
  const dispatch = useDispatch();
  const gists = useSelector(getGistsFromState);
  const isLoading = useSelector(getIsLoadingGists);
  const error = useSelector(getErrorGists);

  const addGists = () => {
    dispatch(getGistsThunk());
  };

  useCallback(() => {
    addGists();
  }, []);

  return (
    <div>
      <GistsPresenter
        isLoading={isLoading}
        error={error}
        gists={gists}
        onClick={addGists}
      />
    </div>
  );
};
