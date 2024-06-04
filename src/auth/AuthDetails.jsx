import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Home from "../paths/home/components/home";
import SignIn from "./singin";
import SignUp from "./createUser";

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
    <div className="margin">
      {authUser ? (
        <>     
          <button onClick={userSignOut}>sing out</button>
          <Home />
        </>
      ) : (
        <>
          <p>Logga in på christins blogg</p> <SignIn /> <button onClick={pusht}> skappa inlogg</button>
          {btn ? <SignUp/>  : "" }   
        </>
      )}
    </div>
  );
};

export default AuthDetails;
