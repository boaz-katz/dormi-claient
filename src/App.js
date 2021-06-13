import React, { useState } from "react";

import "./App.css";
import Login from "./components/login";
import ContrulScreen from "./components/ContrulScreen";
import { Language } from "./styelscomponents/Language";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loginstatus, setloginstatus] = useState(true);
  let x = "rtl";
  // let x = "ltr";

  // const [Language, setLanguage] = useState("tlr");
  return (
    <div>
      {!loginstatus ? (
        <div>
          <Login />
        </div>
      ) : (
        <div>
          <Language Language={x}>
            <ContrulScreen />
          </Language>
        </div>
      )}
    </div>
  );
}

export default App;
