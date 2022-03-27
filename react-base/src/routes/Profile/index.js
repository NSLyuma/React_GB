import { useDispatch, useSelector } from "react-redux";
import { DISPLAY_PROFILE } from "../../store/profile/actions";

export const Profile = () => {
  const dispatch = useDispatch();

  const isShow = useSelector((state) => state.isShow);

  const changeStatus = () => {
    dispatch({ type: DISPLAY_PROFILE });
  };

  return (
    <div>
      <h1>Profile</h1>
      <input type="checkbox" checked={isShow} onChange={changeStatus} />
    </div>
  );
};
