import { useContext, useRef, useState } from "react";
import BlogPost from "./components/blogPost";

import { PostContext, UserContext } from "../../App";
import Write from "./components/write";

import SignIn  from "../../config/auth/singin";
import SignUp  from "../../config/auth/createUser";
import Home from "./home";
import { useNavigate } from "react-router-dom";
import AuthDetails from "../../config/auth/AuthDetails";
import Nav from "../../Header/components/nav";

const SuperHome = () => {
  //   const {userName} = useContext(UserContext)
  //   const {
  //     showVal,
  //     setShowVal,
  //     Koment,
  //     setKomentskrivRubrik,
  //     skrivRubrik,
  //     setSkrivRubrik,
  //     skrivenText,
  //     setSkrivenText,
  //   } = useContext(PostContext);

  const [isLoggdin, setIsLoggdin] = useState(
    JSON.parse(localStorage.getItem("loginStatus"))
  );

 

  return (
    <div>
     
      <AuthDetails/>
    </div>
  );
};

export default SuperHome;
