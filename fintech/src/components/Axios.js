import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [news, setNews] = useState();
  const handleClick = () => {
    let url =
      "/v2/everything?q=tesla&from=2023-02-14&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5";
    axios.get(url).then((response) => {
      console.log(response.data);
      setNews(response.data);
    });
  };
  return (
    <div>
      {news}
      <button onClick={handleClick}>통신 발생</button>
    </div>
  );
};

export default Axios;
