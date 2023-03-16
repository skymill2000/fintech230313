import axios from "axios";
import React from "react";
import AppHeader from "../components/common/AppHeader";

const Acount = () => {
  const accessToken = localStorage.getItem("accessToken");
  const userSeqNo = localStorage.getItem("userSeqNo");
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
    });
  };
  getAccountList();

  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
    </div>
  );
};

export default Acount;
