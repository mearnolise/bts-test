import React from "react";
import Libray from "../component/info&Llibary/Libray";
import SliderTop from "../component/SliderTop";
import Info from "../component/info&Llibary/Info";
import Train from "../component/Train";
import Intro from "../component/intro/Intro";
import Ads from "../component/Ads";

function Home() {
  return (
    <>
      <SliderTop />
      <Intro />
      <Train />
      <Ads />
      <Info />
      <Libray />
    </>
  );
}

export default Home;
