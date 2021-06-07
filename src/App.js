import React, { useState } from "react";

import "./App.css";
import Login from "./components/login";
import ContrulScreen from "./components/ContrulScreen";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [loginstatus, setloginstatus] = useState(true);

  return (
    <div>
      {!loginstatus ? (
        <div>
          <Login />
        </div>
      ) : (
        <div>
          <ContrulScreen />
        </div>
      )}
    </div>
  );
}

export default App;
