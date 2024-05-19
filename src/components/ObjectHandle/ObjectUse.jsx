import { useState } from "react";

const ObjectUse = () => {
  let [myName, setMyName] = useState({
    name: "Antu",
    age: 25,
  });

  const handleChange = () => {
    setMyName((kkm) => ({
      ...kkm,
      name: "Baitul",
      age: "25",
    }));
  };

  return (
    <div>
      <h1>
        {myName.name} {myName.age}
      </h1>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
};

export default ObjectUse;
