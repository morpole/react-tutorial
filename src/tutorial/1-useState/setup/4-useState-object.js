import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Morpole",
    age: 39,
    message: "hi there shams",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "You doing well?", age: 40 });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
