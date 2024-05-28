import { useContext, useState } from "react";
import BlogPost from "./blogPost";
import { Link } from "react-router-dom";
import { PostContext} from "../../../App";
import Header from "../../../Header/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

const Write = () => {
  const {
    showVal,
    setShowVal,
    skrivRubrik,
    setSkrivRubrik,
    skrivenText,
    setSkrivenText,
  } = useContext(PostContext);

  const [user] = useAuthState(auth);
  
  const handelAdd = () => {
    if (skrivRubrik && skrivenText.trim() !== "") {
      const newBlogPost = { user: user.email,  title: skrivRubrik, text: skrivenText, comments:[] };
      setShowVal((p) => [...p, newBlogPost]);
      setSkrivRubrik("")
      setSkrivenText("")
    }
  };

  if(user == null || user == undefined){
    return(
      <>
      <p>Can't acces page</p>
      </>
    )
  }
  return (
    <div>
      
      <p>skriv dit inlägg</p>
      <input
        onChange={(e) => setSkrivRubrik(e.target.value)}
        value={skrivRubrik}
      />
      <input
        onChange={(e) => setSkrivenText(e.target.value)}
        value={skrivenText}
      />
      <Link to="/">
        <button onClick={handelAdd}>Lägg upp inlägget</button>
      </Link>
    </div>
  );
};

export default Write;
