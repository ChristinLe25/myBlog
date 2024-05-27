import { useContext, useRef, useState } from "react";
import BlogPost from "./components/blogPost";

import { PostContext, UserContext } from "../../App";
import Write from "./components/write";

import SignIn  from "../../config/auth/singin";
import SignUp  from "../../config/auth/createUser";
import Home from "./home";
import { useNavigate } from "react-router-dom";

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

  const [sumitBtn, setSumitBtn] = useState(true);

  const navigate = useNavigate();

  const isSumit = () => {
    setSumitBtn(!sumitBtn);
  };

  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SuperHome;
