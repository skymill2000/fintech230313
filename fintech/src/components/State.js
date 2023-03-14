import { useState } from "react";

const State = () => {
  let [inputText, setInputText] = useState();
  const handleChange = ({ target }) => {
    const { value } = target;
    setInputText(value);
  };

  const handleClick = () => {
    console.log("클릭!");
  };

  return (
    <div>
      <p>{inputText}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>출력</button>
    </div>
  );
};

export default State;
