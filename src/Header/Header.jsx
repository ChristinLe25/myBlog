
import Nav from "./components/nav";
import React, { useContext, useState } from "react";

const Header = () => {

  return (
    <div className="header">
      <h3>Christin´s Blogg</h3>
      {/* {authUser ? <><Nav/></> : <></>} */}
        
      <Nav/>
    </div>
    
  );
};

export default Header;
