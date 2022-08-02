import React from "react";
import SectionHead from "./SectionHead";
import InfoLibray from "./InfoLibray";

function Libray() {
  return (
    <div className="container">
      <hr className="line-hr" />
      <SectionHead text1={"BTS "} text2={"E-Libray"} text3={"ดูทั้งหมด >"} />

      <div className="row">
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i_1.jpg"}
          text1="ระบบโครงสร้างทางวิ่ง และ สถานี"
          text2="Structure of Routes and Stations"
        />
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i2.jpg"}
          text1="ระบบรถไฟฟ้า"
          text2="Railway Operating System"
        />
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i3.jpg"}
          text1="ระบบซ่อมบำรุง"
          text2="Maintenance System"
        />
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i4.jpg"}
          text1="ระบบบัตรโดยสาร"
          text2="Ticketing System"
        />
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i5.jpg"}
          text1="ระบบความปลอดภัย"
          text2="Safety System"
        />
        <InfoLibray
          url={"https://www.bts.co.th/files/uploads/home-page2/img/i6.jpg"}
          text1="ระบบรักษาความปลอดภัย"
          text2="Security System"
        />
      </div>
    </div>
  );
}

export default Libray;
