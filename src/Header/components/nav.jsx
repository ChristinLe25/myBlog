import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const Nav = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <p> {user?.email}</p>
      {user?.email ? (
        <>
          <Link className="link" to="/">
            Start
          </Link>
          <Link className="link" to="/write">
            write
          </Link>
          <Link className="link" to="/profile">
            profile
          </Link>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
