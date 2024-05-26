import { createContext, useState } from "react";
import Header from "./Header/Header";
import Home from "./paths/home/home";
import Write from "./paths/home/components/write";
import Profile from "./paths/Profile/profile";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loggin from "./paths/home/components/loggin";



export const UserContext = createContext();
export const PostContext = createContext();


const App = () => {

  const [isLoggdin, setIsLoggdin] = useState(
    JSON.parse(localStorage.getItem("loginStatus"))
  );

  const handelLoggdin = () => {
    const loggdInStatus = !isLoggdin;
    setIsLoggdin(loggdInStatus);
    localStorage.setItem("loginStatus", loggdInStatus);
  };

  const [userName, setUserName] = useState("christin");


  const [post, setPost] = useState([
  ]);
  const [Koment, setKoment] =useState([])

  const [showVal, setShowVal] = useState([]);
  
  const [skrivRubrik, setSkrivRubrik] = useState("");
  const [skrivenText, setSkrivenText] = useState("");


  // const navigate = useNavigate()
  // const handelLogout = async () => {
  //   await signOut(auth)
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("token")
  //   navigate("/Login")
  // }
  

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          

          <>
            {isLoggdin ? (
              <Loggin />
            ) : (
                <PostContext.Provider value={{ showVal, setShowVal, post, setPost, Koment, setKoment,skrivRubrik, setSkrivRubrik,skrivenText, setSkrivenText }}>
              
              <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/write" element={<Write />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </PostContext.Provider>
            )}
          </>
          <div onClick={handelLoggdin}>
            {isLoggdin ? (
              <button className="log-in-btn">logga in</button>
            ) : (
              <button className="log-ut-btn">logga ut</button>
            )}
          </div>
        </BrowserRouter>
        </div>
        {/* <button onClick={handelLogout}>logga uthihi</button> */}
        </UserContext.Provider>
      );
};

export default App;
