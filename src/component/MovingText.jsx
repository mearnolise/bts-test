import React from "react";

function MovingText() {
  return (
    <>
      <marquee className="moving-bg">
        <>
          <img
            alt="train"
            src="https://www.bts.co.th/files/uploads/home-page/img/sky-train.png"
          />
          บีทีเอสเข้มป้องกันโควิด – 19 ต้อนรับเปิดเมือง
          ขอความร่วมมือผู้โดยสารสวมหน้ากากอนามัยในพื้นที่แออัด
        </>
      </marquee>
    </>
  );
}

export default MovingText;
