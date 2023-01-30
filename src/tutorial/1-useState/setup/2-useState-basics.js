import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("push the button");

  const handleClick = () => {
    if (text === "push the button") {
      setText("push it again");
    } else {
      setText("push the button");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
