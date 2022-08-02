function SectionHead({ text1, text2, text3 }) {
  return (
    <div className="section-head">
      <div className="section-head-start">
        <h2 className="text-left green">{text1}</h2>
        <h2 className="text-left">{text2}</h2>
      </div>
      <div className="section-head-end">
        <p className="text-right">{text3}</p>
      </div>
    </div>
  );
}

export default SectionHead;
