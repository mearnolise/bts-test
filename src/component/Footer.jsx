import { BsBarChartLine } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-blue">
        <div className="row px-4 pt-3">
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>เกี่ยวกับบีทีเอส</p>
            <ul>
              <li>ประวัติความเป็นมา</li>
              <li>วิสัยทัศน์ ภารกิจ และค่านิยมร่วม</li>
              <li>คณะกรรมการบริหารและคณะกรรมการที่ปรึกษา</li>
              <li>การรับรองมาตรฐาน</li>
            </ul>
            <p>ข้อแนะนำเพื่อความปลอดภัย</p>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>ข้อมูลบัตรโดยสาร</p>
            <ul>
              <li>บัตรโดยสารเที่ยวเดียว</li>
              <li>บัตรโดยสารประเภทหนึ่งวัน</li>
              <li>บัตรแรบบิท</li>
              <li>ผูกบัตรแรบบิทกับไลน์เพย์</li>
            </ul>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>BTS E-Library</p>
            <ul>
              <li>ระบบโครงสร้างและสถานี</li>
              <li>ระบบรถไฟฟ้า</li>
              <li>ระบบซ่อมบำรุง</li>
              <li>ระบบบัตรโดยสาร</li>
            </ul>
            <p>BTS Magazine</p>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>ธุรกิจและบริการ</p>
            <ul>
              <li>ข่าวและกิจกรรม</li>
              <li>โปรโมชั่นและสิทธิประโยชน์</li>
              <li>บีทีเอส ชาเลนจ์</li>
              <li>ธุรกิจและพาณิชย์</li>
            </ul>
            <p>ร่วมงานกับบีทีเอส</p>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>เว็บลิงค์</p>
            <ul>
              <li>บริษัทในเครือบีทีเอสกรุ๊ป</li>
              <li>หน่วยงานที่เกี่ยวข้อง</li>
            </ul>
            <p>ติดต่อเรา</p>
            <p>คำถามที่พบบ่อย</p>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
            <p>ข้อมูลการใช้บริการ</p>
            <ul>
              <li>เส้นทางและอัตราค่าโดยสาร</li>
              <li>แผนที่บริเวณสถานี</li>
              <li>เวลาและความถี่การเดินรถ</li>
              <li>ตรวจสอบสภาพการจราจร</li>
            </ul>
          </div>
        </div>
        <div className="footer-blue-bottom">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 pt-4">
              <div className="location-container">
                <h3>บริษัท ระบบขนส่งมวลชนกรุงเทพ จำกัด (มหาชน)</h3>
                <p>
                  อาคารบีทีเอส 1000 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพฯ
                  10900
                </p>
                <p>โทรศัพท์: 0 2617 7300</p>
                <p className="location-blue-text">
                  เว็บไซต์นี้แสดงผลได้ดีใน Chrome : Safari : Firefox
                  รองรับระบบสำหรับผู้พิการทางสายตา
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12 pt-4">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-app">
                    สามารถดาวน์โหลดแอปพลิเคชั่นได้ที่
                  </h3>
                  <p className="text-app">App Store และ Play Store</p>
                </div>
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="qr-space">
                    <div className="qr-container">
                      <img
                        src="https://www.bts.co.th/files/uploads/home-page2/img/apple.png"
                        alt="qrcode"
                        className="qr-size"
                      />
                      <img
                        src="https://www.bts.co.th/files/uploads/home-page/img/icon_appstore.jpg"
                        alt="appple logo"
                        className="logo-size"
                      />
                    </div>
                    <div className="qr-container">
                      <img
                        src="https://www.bts.co.th/files/uploads/home-page2/img/googleplay.png"
                        alt="qrcode"
                        className="qr-size"
                      />
                      <img
                        src="https://www.bts.co.th/files/uploads/home-page/img/icon_google.jpg"
                        alt="playstore logo"
                        className="logo-size"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-black">
        <BsBarChartLine className="footer-black-icon" />
        <p className="footer-black-text">
          ขอสงวนสิทธิ์ 2561 บริษัท ระบบขนส่งมวลชนกรุงเทพ จำกัด (มหาชน)
        </p>
      </div>
    </>
  );
}

export default Footer;
