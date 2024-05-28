import { useContext, useState } from "react";
import { PostContext, UserContext } from "../../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";


const Coments = ({index}) => {
  const [Koment, setKoment] = useState([]);

const [user] = useAuthState(auth)

  const [inputKomentarVal, setInputKomentarVal] = useState("");

  const {setShowVal, showVal} = useContext(PostContext);

  const handelKomentar = () => {
    console.log(index)
      const newBlogKomentar = { user: user?.email, comment: inputKomentarVal };
      let list = showVal;
      let blogPost = showVal[index];
      blogPost.comments.push(newBlogKomentar);
      list[index] = blogPost;
      setShowVal(list);
      setInputKomentarVal("");  
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputKomentarVal(e.target.value)}
        value={inputKomentarVal}
      />
      <button onClick={handelKomentar}>kommentera</button>
      <ul className="showComments">
            {showVal[index].comments?.map((comment, id) => (
              <li key={id}>
                <div>
                  {comment.user}
                </div>
                <div>
                {comment.comment}
                </div>
                </li>
            ))}
            </ul>
    </>
  );
};

export default Coments;
