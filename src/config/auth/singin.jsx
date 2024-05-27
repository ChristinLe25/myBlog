import { auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={singIn}>
        <h1>Sing in</h1>
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
          <button type="sumit"> Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
