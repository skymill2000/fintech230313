import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";
const Balance = () => {
  const [balance, setBalance] = useState(0);
  const query = useLocation().search;
  const fintechUseNo = queryString.parse(query).fintechUseNo;

  useEffect(() => {
    getBalance();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440"; //이용기관번호 본인것 입력
    let transId = clientNo + "U" + countnum;
    return transId;
  };

  console.log(fintechUseNo);
  const getBalance = () => {
    console.log("요청 만들어주세요");
    console.log(genTransId());
    const accessToken = localStorage.getItem("accessToken");

    //여기서 부터 작성 바랍니다.
    const sendData = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      tran_dtime: "20230316141800",
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
      setBalance(data.balance_amt);
      //   setBalance(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={"잔액조회"}></AppHeader>
      귀하의 잔액은 :{balance} 입니다.
    </div>
  );
};

export default Balance;
