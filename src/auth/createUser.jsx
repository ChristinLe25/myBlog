import { auth } from "../config/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={singUp}>
        <h1>Sing up</h1>
        <input
          type="email"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="sumit"> Sign up</button>
      </form>
    </div>
  );
};
export default SingUp;
