import { createContext, useState } from "react";
import Header from "./Header/Header";

import Write from "./paths/home/components/write";
import Profile from "./paths/Profile/profile";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


import SingUp  from "./config/auth/createUser";

import  SignIn  from "./config/auth/singin";
import PageLayout from "./pathsLayout";
import SuperHome from "./paths/home/superHome";

export const UserContext = createContext();
export const PostContext = createContext();


const App = () => {
  const [userName, setUserName] = useState("christin");

  const [post, setPost] = useState([]);
  const [Koment, setKoment] = useState([]);

  const [showVal, setShowVal] = useState([]);

  const [skrivRubrik, setSkrivRubrik] = useState("");
  const [skrivenText, setSkrivenText] = useState("");


  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <>


            <PostContext.Provider
              value={{
                showVal,
                setShowVal,
                post,
                setPost,
                Koment,
                setKoment,
                skrivRubrik,
                setSkrivRubrik,
                skrivenText,
                setSkrivenText,
              }}
            >
              <Routes>
                <Route path="/" element={<SuperHome />} />
                <Route path="/write" element={<Write />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </PostContext.Provider>
          
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SingUp/>} />
            </Routes>
            
          
          </>
         
        </BrowserRouter>
      </div>
      {/* <button onClick={handelLogout}>logga uthihi</button> */}
    </UserContext.Provider>
  );
};

export default App;
