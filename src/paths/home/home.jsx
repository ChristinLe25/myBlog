// import { useState, useEffect } from "react";

// const Home = () => {

// const [count, setCount] = useState(0)

// const updateCount = () => {
//   setCount(count + 1)
// }

//     return (
//         <header>
//         <h1>home</h1>
//        <button onClick={updateCount}> {count} </button>
//     </header>
//   );
// };

// export default Home;

// import { useState, useEffect } from "react";

// const Home = () => {
//   const [ShowValue, setShowValue] = useState(localStorage.getItem("key"));

//   const updateValu = () => {
//     const newShowValu = !ShowValue
//     setShowValue(newShowValu);
//     localStorage.setItem("key", newShowValu)
//   };
// console.log(localStorage)

//   return (
//     <div>
//       <button onClick={updateValu}>Tyck på eggen risk</button>
//       <p>
//         {ShowValue ? (
//           <img
//             src="https://i.ytimg.com/vi/usYP7VqMnec/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDcoV_InxO6iHL5SKb0_qlw9vMAAA"
//             alt=""
//             width="600"
//             height="500"
//           />
//         ) : (
//           ""
//         )}
//       </p>

//     </div>
//   );
// };

// export default Home;

import { useContext, useRef, useState } from "react";
import BlogPost from "./components/blogPost";

import { PostContext, UserContext} from "../../App";
import Write from "./components/write";
import Coments from "./components/coment";
import Loggin from "./components/loggin";

const Home = () => {
  const {userName} = useContext(UserContext)
  const {
    showVal,
    setShowVal,
    Koment,
    setKomentskrivRubrik,
    skrivRubrik,
    setSkrivRubrik,
    skrivenText,
    setSkrivenText,
  } = useContext(PostContext);



  const deletBloggPost = (index) => {
    const updatePost = showVal.filter((_, i) => i !== index);
    setShowVal(updatePost);
  };

  return (
    <div>
    
    

      <p>du är inloggad {userName}</p>
      <ul>
        {showVal.map((blogPost, index) => (
          <li className="blog-post-style" key={index}>
           
            <div>{blogPost.rubrik}</div>
            <div>{blogPost.text}</div>
            <Coments />
            <button onClick={() => deletBloggPost(index)}>delet</button>
          </li>
        ))}
      </ul>

      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
};

export default Home;
