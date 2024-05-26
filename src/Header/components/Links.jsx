import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <Link className="link" to="/">
        Start
      </Link>
      <Link className="link" to="/write">
        write
      </Link>
      <Link className="link" to="/profile">
        profile
      </Link>
    </div>
  );
};

export default Links;