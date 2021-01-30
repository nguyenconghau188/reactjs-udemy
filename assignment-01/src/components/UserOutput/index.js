import { createFactory } from "react";

import React from "react";

function UserOutput(props) {
  return (
    <segment>
      <ul>
        {props.usernames.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
    </segment>
  );
}

export default UserOutput;
