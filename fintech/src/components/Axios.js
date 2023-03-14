import React from "react";
import axios from "axios";

const Axios = () => {
  const handleClick = () => {
    axios.get("https://naver.com").then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>통신 발생</button>
    </div>
  );
};

export default Axios;
