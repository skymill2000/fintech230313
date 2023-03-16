import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const query = useLocation().search;
  const fintechUseNo = queryString.parse(query).fintechUseNo;

  useEffect(() => {
    getBalance();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440";
    let transId = clientNo + "U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  console.log(fintechUseNo);
  const getBalance = () => {
    console.log("요청 만들어주세요");
    console.log(genTransId());
  };

  return (
    <div>
      <AppHeader title={"잔액조회"}></AppHeader>
    </div>
  );
};

export default Balance;
