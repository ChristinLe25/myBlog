import { useContext, useState } from "react";
import { PostContext } from "../../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

const Coments = ({ index }) => {
  const [user] = useAuthState(auth);

  const [inputKomentarVal, setInputKomentarVal] = useState("");
  const { setShowVal, showVal } = useContext(PostContext);

  const handelKomentar = () => {
    console.log(index);
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
      <ul className="ul-placment " >
        {showVal[index].comments?.map((comment, id) => (
          <li className="showComments" key={id}>
            <div className="coment-user">{comment.user}</div>
            <div className="coment-text">{comment.comment}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Coments;
