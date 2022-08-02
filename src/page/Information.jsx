import React from "react";
import Train from "../component/Train";
import Info from "../component/info&Llibary/Info";
import PageName from "../component/page/PageName";
import PageImage from "../component/page/PageImage";

function Information() {
  return (
    <>
      <PageImage
        src={
          "https://btsapp1.bts.co.th/WebApplication/storage_file/files/AW-Banner-web-%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99-1500x350.jpg"
        }
      />
      <PageName text1="ข่าวสารและกิจกรรม" />
      <Info />
      <Train />
    </>
  );
}

export default Information;
