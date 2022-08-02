import React from "react";
import Libray from "../component/info&Llibary/Libray";
import PageName from "../component/page/PageName";
import Train from "../component/Train";
import PageImage from "../component/page/PageImage";

function ELibrary() {
  return (
    <>
      <PageImage
        src={
          "https://btsapp1.bts.co.th/WebApplication/storage_file/images/banner_header_7.jpg"
        }
      />
      <PageName text1="BTS E-Library" />
      <Libray />
      <Train />
    </>
  );
}

export default ELibrary;
