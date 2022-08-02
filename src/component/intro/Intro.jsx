import Policy from "./Policy";

function Intro() {
  return (
    <div className="intro-div">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5  col-12">
            <h2>
              รถไฟฟ้า
              <section className="green-text">บีทีเอส</section>
            </h2>
            <h3>วิสัยทัศน์</h3>
            <p>เป็นผู้นำในการให้บริการระบบรถไฟฟ้าขนส่งมวลชนที่ดีที่สุด</p>

            <h3>ภารกิจ</h3>
            <p>
              มุ่งพัฒนาระบบ การดำเนินการ และบุคลากร ตลอดจนการบริหาร
              ทรัพยากรอย่างมีประสิทธิภาพ
              เพื่อให้บริการระบบรถไฟฟ้าขนส่งมวลชนเป็นระบบที่ทันสมัย รวดเร็ว
              ปลอดภัย มีประสิทธิภาพ และเชื่อถือได้
              โดยให้ผลตอบแทนที่เหมาะสมแก่ผู้ที่เกี่ยวข้องและสังคม
            </p>
            <h3>ค่านิยมร่วม</h3>
            <p>
              ยึดมั่นในบรรษัทภิบาล เชื่อมั่นในบุคลากร
              มุ่งมั่นสู่ความเป็นเลิศในการให้บริการ
              สร้างความพึงพอใจสูงสุดแก่ผู้โดยสาร
            </p>
          </div>
          <div className="col-lg-7 col-md-7 col-12 intro-relative">
            <img
              alt="train-bts-pic"
              className="intro-pic"
              src="https://www.bts.co.th/files/uploads/home-page2/img/skytrain.jpg"
            />
            <Policy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
