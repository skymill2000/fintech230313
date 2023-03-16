import React from "react";
import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCode = () => {
  const query = useLocation().search;
  const fintechUseNo = queryString.parse(query).fintechUseNo;
  return (
    <div>
      <AppHeader title={"QR CODE"}></AppHeader>
      <QRBlock>
        <QRCodeSVG value={fintechUseNo} />
        <p>핀테크번호 : {fintechUseNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCode;
