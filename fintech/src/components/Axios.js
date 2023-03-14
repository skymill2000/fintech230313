import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [searchInput, setSearchInput] = useState("");
  const [news, setNews] = useState();
  const handleClick = () => {
    let url = `/v2/everything?q=${searchInput}&from=2023-02-14&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`;
    axios.get(url).then((response) => {
      console.log(response.data);
      setNews(response.data);
    });
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchInput(value);
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>통신 발생</button>
    </div>
  );
};

export default Axios;
