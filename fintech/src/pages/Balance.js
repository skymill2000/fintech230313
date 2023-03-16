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
    const accessToken = localStorage.getItem("accessToken");

    //여기서 부터 작성 바랍니다.
    const sendData = {
      //??
    };

    const option = {
      method: "GET",
      url: "v2.0/account/balance/fin_num",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      //   setBalance(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={"잔액조회"}></AppHeader>
    </div>
  );
};

export default Balance;
