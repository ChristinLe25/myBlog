import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import Home from "../../paths/home/home";
import SignIn from "./singin";
import SignUp from "./createUser";
import Header from "../../Header/Header";
import Nav from "../../Header/components/nav";

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
        lisen()
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(()=>{
        console.log("du är uttologgad")
    }).catch(error => console.log(error))
  }

  return <div>{authUser ? <><p>`sing in as ${authUser.email}`</p><button onClick={userSignOut}>sing out</button><Home/></> : <><p>sing in</p>  <SignIn />
  <SignUp/> </>}</div>;
};

export default AuthDetails;
