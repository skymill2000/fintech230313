import React, { useState } from "react";
import axios from "axios";
import AppHeader from "../components/common/AppHeader";
import NewsList from "../components/news/NewsList";
import SearchInput from "../components/news/SearchInput";

const NewsSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [news, setNews] = useState([]);
  const handleClick = () => {
    //axios 요청 시작
    console.log(searchText);
    let url = `/v2/everything?q=${searchText}&from=2023-02-14&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`;
    axios.get(url).then((response) => {
      setNews(response.data);
      console.log(news);
    });
  };
  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchText(value);
  };

  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      {/* homework 
        1. 뉴스 검색어를 입력받는 컴포넌트
         - State.js 컴포넌트 참조
         - 통신 : Axios.js 컴포넌트를 참조
        2. 해당 검색 결과를 출력하는 컴포넌트
         - List 컴포넌트를 참조
      */}
      <SearchInput
        handleClick={handleClick}
        handleChange={handleChange}
      ></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsSearch;
