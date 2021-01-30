import "./App.css";
import UserInput from "./components/UserInput";
import React, { useState } from "react";
import UserOutput from "./components/UserOutput";

function App() {
  const [usernameState, setUsernameState] = useState([]);

  const handleInputUsername = (username) => {
    setUsernameState([...usernameState, username]);
  };

  return (
    <segment>
      <div className="App">
        <UserInput handleInputUsername={handleInputUsername} />
        <UserOutput usernames={usernameState} />
      </div>
    </segment>
  );
}

export default App;
