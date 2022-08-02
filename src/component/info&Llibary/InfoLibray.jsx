import React from "react";

function InfoLibray({ url, text1, text2 }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 Info-block ">
      <img className="library-grid" src={url} alt="pic-train" />
      <h2 className="library-text-header-th">{text1}</h2>
      <p className="librart-text-header-en">{text2}</p>
    </div>
  );
}

export default InfoLibray;
