// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { auth } from "../../../config/firebase";
// import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { Auth } from "../../../config/auth/createUser";

import { SignIn } from "../../../config/auth/singin";

const Loggin = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPasswerd] = useState("");

//   const navigete = useNavigate();

//   const handelLoggin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredensel = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log(userCredensel)

//       const user = userCredensel.user;
//       localStorage.setItem("token", user.accessToken);
//       localStorage.setItem("user", JSON.stringify(user));
//       navigete("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };





  return (
      //       <p>logga in gärmed email</p>

//       <p>anvendar namn</p>
//       <input onChange={(e) => setEmail(e.target.value)} value={email} />
//       <p>lösenord</p>
//       <input onChange={(e) => setPasswerd(e.target.value)} value={password} />
//       <button onClick={handelLoggin} className="log-in-btn">
//         logga in
//       </button>
      <div>
        <Auth/>
      </div>
);
 };

export default Loggin;
