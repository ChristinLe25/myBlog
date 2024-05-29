import { useState } from "react";
import Coments from "./coment";

const BlogPost = () => {
  const [askrivRubrik, asetSkrivRubrik] = useState("Rubriken på sidan ");
  const [askrivenText, asetSkrivenText] = useState(
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptatem repudiandae! Voluptatem quas suscipit sunt aut impedit rem eveniet deleniti numquam! Accusantium illo fuga nulla cum voluptatibus iure tenetur autem."
  );
  return (
    <div className="blog-post-style">
      <p>Jane Doe</p>
      <div className="blog-runrik">{askrivRubrik}</div>
      <div className="blog-text">{askrivenText}</div>

      <ul>
        <Coments />
      </ul>
    </div>
  );
};

export default BlogPost;
