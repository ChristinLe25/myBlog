import { createContext, useState } from "react";
import Header from "./Header/Header";
import Write from "./paths/write";
import Profile from "./paths/profile";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./auth/createUser";
import SignIn from "./auth/singin";
import SuperHome from "./paths/home/homePage";

export const PostContext = createContext();

const App = () => {
  const [showVal, setShowVal] = useState([
    {
      user: "jane doe",
      title: "En go dag",
      text: "idag var en go och bra dag",
      comments: [{ user: "jane doe", comment: "Trying the comments" }],
    },
  ]);

  const [skrivRubrik, setSkrivRubrik] = useState("");
  const [skrivenText, setSkrivenText] = useState("");

  return (
      <div className="App">
            <Header />
        <BrowserRouter>
          <>
            <PostContext.Provider
              value={{
                showVal,
                setShowVal,
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
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SingUp />} />
              </Routes>
            </PostContext.Provider>
          </>
        </BrowserRouter>
      </div>
    
  );
};

export default App;
