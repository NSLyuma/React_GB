import { Link } from "react-router-dom";
import { getLoginLink, getRegistrationLink } from "../../navigation";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link style={{ fontSize: "30px" }} to={getRegistrationLink}>
          Registration
        </Link>
      </div>
      <div>
        <Link style={{ fontSize: "30px" }} to={getLoginLink}>
          Login
        </Link>
      </div>
    </div>
  );
};
