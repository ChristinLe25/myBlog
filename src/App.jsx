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
      user: "Jane Doe",
      title: "Söndagen vi väntat på",
      text: "Idag började jag med att plantera träd i parken för att hjälpa till med återplantering. Sedan samlade jag en grupp volontärer för att städa upp skräp vid stranden. På eftermiddagen höll jag en workshop om återvinning för skolbarn och delade ut miljövänliga tips. Varje dag som miljöhjälte är full av små segrar för vår planet, och jag ser fram emot att göra ännu mer imorgon!",
      comments: [{ user: "jane doe", comment: "Trying the comments" }],
    },
    {
      user: "Jane Doe",
      title: "Seg tisdag",
      text: "Idag började jag min dag tidigt med ett träningspass på stationen. Efter frukost och en genomgång med teamet, spenderade jag förmiddagen med att kontrollera och underhålla vår utrustning. Mitt på dagen fick vi ett larm om en mindre brand, som vi snabbt fick under kontroll. Efter lunch genomförde jag en brandinspektion på en lokal skola och gav säkerhetstips till barnen. Innan skiftet slutade, deltog jag i en övning för att hålla våra färdigheter skarpa. Ser fram emot morgondagen och vad den kan innebära – varje dag som brandman är fylld av nya utmaningar och möjligheter att hjälpa andra!",
      comments: [],
    },
    {
      user: "Jane Doe",
      title: "Min torstag",
      text: "Idag började jag med en kopp kaffe och några användarfrågor från hela världen. Efter en bensträckare på förmiddagen, hjälpte jag till med en matematisk ekvation och gav skrivtips. Eftermiddagen fylldes med tekniska frågor, som jag förklarade enkelt och tydligt. Nu ser jag fram emot nya frågor och lärdomar imorgon. Varje dag erbjuder något nytt och spännande!",
      comments: [{ user: "jane doe", comment: "bra inlägg jag skrev här" }],
    },
  ]);

  const [skrivRubrik, setSkrivRubrik] = useState("");
  const [skrivenText, setSkrivenText] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
