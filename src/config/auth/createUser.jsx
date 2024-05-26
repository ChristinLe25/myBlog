import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false)
   
  const createUserWithMail = async (e) => {
    e.preventDefault()
      
      if(!isSigningIn) {
          setIsSigningIn(true)

    await createUserWithEmailAndPassword(auth, email, password);
    
  }};


  return (
    <div>
      <form onSubmit={createUserWithMail} >

      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
        />
      <button disabled={isSigningIn} type="sumit" >  {isSigningIn ? 'Signing In...' : 'Sign In'}</button>
        </form>

    
    </div>
  );
};