import React from "react";
import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";

const QrCode = () => {
  return (
    <div>
      <AppHeader title={"QR CODE"}></AppHeader>
      <QRCodeSVG value="https://reactjs.org/" />
    </div>
  );
};

export default QrCode;
