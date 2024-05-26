import { useContext, useState } from "react";
import { UserContext } from "../../../App";


const Coments = () => {
  const {userName} = useContext(UserContext)
  const [Koment, setKoment] = useState([]);

  const [inputKomentarVal, setInputKomentarVal] = useState("");

  const handelKomentar = () => {
    if (inputKomentarVal.trim() !== "") {
      const newBlogKomentar = { anvendare: userName, coment: inputKomentarVal };
      setKoment((c) => [...c, newBlogKomentar]);
      setInputKomentarVal("");
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputKomentarVal(e.target.value)}
        value={inputKomentarVal}
      />
      <button onClick={handelKomentar}>kommentera</button>
      {Koment.map((coment, index) => (
        <div className="coment" key={index}>
          <div className="coment-user">{coment.anvendare}</div>
          <div className="text-conent">{coment.coment}</div>
        </div>
      ))}
    </>
  );
};

export default Coments;
