import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PROFILE_STATUS } from "../../store/profile/actions";

export const Profile = () => {
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const changeStatus = (status) => () => {
    dispatch({ type: CHANGE_PROFILE_STATUS, payload: { status: !status } });
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        onClick={changeStatus(profile.status)}
        checked={profile.status}
        type="checkbox"
      />
    </div>
  );
};
