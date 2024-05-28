import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import Home from "../../paths/home/home";
import SignIn from "./singin";
import SignUp from "./createUser";
import Header from "../../Header/Header";
import Nav from "../../Header/components/nav";
import { Link, useNavigate } from "react-router-dom";
import SingUp from "./createUser";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const lisen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      lisen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("du är uttologgad");
      })
      .catch((error) => console.log(error));
  };
  const [btn, setBtn] = useState(false);
const pusht = () => {
  setBtn(!btn)
}

  return (
    <div>
      {authUser ? (
        <>
        <Header/>
          <p>sing in as {authUser.email}</p>
          <button onClick={userSignOut}>sing out</button>
          <Home />
        </>
      ) : (
        <>
          <p>sing in</p> <SignIn /> <button onClick={pusht}> skappa inlogg</button>
          {btn ? <SignUp/>  : "" }
           
         
        </>
      )}
    </div>
  );
};

export default AuthDetails;
