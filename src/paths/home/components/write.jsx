import { useContext, useState } from "react";
import BlogPost from "./blogPost";
import { Link } from "react-router-dom";
import { PostContext} from "../../../App";

const Write = () => {
  const {
    showVal,
    setShowVal,
    skrivRubrik,
    setSkrivRubrik,
    skrivenText,
    setSkrivenText,
  } = useContext(PostContext);

  const handelAdd = () => {
    if (skrivRubrik && skrivenText.trim() !== "") {
      const newBlogPost = { rubrik: skrivRubrik, text: skrivenText };
      setShowVal((p) => [...p, newBlogPost]);
      setSkrivRubrik("")
      setSkrivenText("")
    }
  };

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
