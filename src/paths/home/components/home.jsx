import { useContext } from "react";
import { PostContext } from "../../../App";
import Coments from "./coment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

const Home = () => {
  const { showVal, setShowVal } = useContext(PostContext);

  const [user] = useAuthState(auth);

  const deletBloggPost = (index) => {
    const updatePost = showVal.filter((_, i) => i !== index);
    setShowVal(updatePost);
  };
  return (
    <div>
      <ul >
        {showVal.map((blogPost, index) => (
          <li className="blog-post-style" key={index}>
            <h5>{blogPost.user}</h5>
            <div className="blog-title">{blogPost.title}</div>
            <div>{blogPost.text}</div>
            <Coments index={index} />
            {user.email == blogPost.user ? (
              <button onClick={() => deletBloggPost(index)}>delet</button>
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
