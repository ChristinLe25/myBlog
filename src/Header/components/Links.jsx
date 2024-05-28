import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth' 
import { useState } from "react";
const Links = () => {

const [user] = useAuthState(auth)


  return (
    <div>
      {user?.email ?(
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
        ) : ""}
      <div>

      <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Links;