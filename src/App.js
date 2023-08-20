import "./App.css";
import KbcContainer from "./pages/KbcContainer";
import React, { useState } from "react";
import DetailsInput from "./pages/DetailsInput";

function App() {

  const [userName, setUserName] = useState("");
  const [nameSubmit, setNameSubmit] = useState(false);

  return (
    <>
      {(userName && nameSubmit) && <KbcContainer userName={userName}/>}
      {(!userName || !nameSubmit) &&
        <DetailsInput setUserName={setUserName} setNameSubmit={setNameSubmit} />
      }
    </>
  );
}

export default App;
