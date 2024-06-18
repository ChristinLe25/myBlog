import { useContext, useState } from "react";
import { PostContext } from "../../../App";
import Coments from "./coment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import EditPost from "./editPost";

const Home = () => {
  const { showVal, setShowVal } = useContext(PostContext);

  const [user] = useAuthState(auth);

  const [editing, setEdititng] = useState(false);

  const deletBloggPost = (index) => {
    const updatePost = showVal.filter((_, i) => i !== index);
    setShowVal(updatePost);
  };
  return (
    <div>
      <ul>
        {showVal.map((blogPost, index) => (
          <li className="blog-post-style" key={index}>
            {user.email === blogPost.user && editing ? (
              <div>
                <EditPost index={index} blogPost={blogPost} />
              </div>
            ) : (
              <>
                <h5>{blogPost.user}</h5>
                <div className="blog-title">{blogPost.title}</div>
                <div>{blogPost.text}</div>
              </>
            )}
            <Coments index={index} />
            {user.email === blogPost.user ? (
              <div>
                <button onClick={() => deletBloggPost(index)}>Delete</button>
                <button onClick={() => setEdititng(!editing)}>{editing ? "Leave editing" :"Edit"}</button>
              </div>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
