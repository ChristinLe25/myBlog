import { useContext, useState } from "react";
import { PostContext } from "../../../App";

const EditPost = ({ blogPost, index }) => {
  const { showVal, setShowVal } = useContext(PostContext);
  const [text, setText] = useState(blogPost.text);
  const [title, setTitle] = useState(blogPost.title);

  const setEdits = () => {
    let valCopy = showVal;

    valCopy.map((post, i) => {
        if(i === index){
            post.title = title;
            post.text = text;
        }
    })
    setShowVal(valCopy);
  }

  return (
    <>
      <h5>{blogPost.user}</h5>
      <input
        type="text"
        defaultValue={blogPost.title}
        onChange={(e) => setTitle(e.target.value)}
        className="blog-title"
      />
      <textarea
        defaultValue={blogPost.text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={setEdits}>save edit</button>
    </>
  );
};

export default EditPost;
