import axios from "axios";
import React, { useState, useEffect } from "react";
import AppHeader from "../components/common/AppHeader";
import MainAccountCard from "../components/main/MainAccountCard";

const Acount = () => {
  const accessToken = localStorage.getItem("accessToken");
  const userSeqNo = localStorage.getItem("userSeqNo");

  useEffect(() => {
    getAccountList();
  }, []);

  const [accountList, setAccountList] = useState([]);
  const getAccountList = () => {
    const sendData = {
      user_seq_no: userSeqNo,
    };
    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData,
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setAccountList(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
      {accountList.map((data) => {
        return (
          <MainAccountCard
            bankName={data.bank_name}
            fintechUseNo={data.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default Acount;
