import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./component/Footer";
import MovingText from "./component/MovingText";
import Information from "./page/Information";
import ELibrary from "./page/ELibrary";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MovingText />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/information" element={<Information />}></Route>
          <Route path="/system" element={<ELibrary />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
