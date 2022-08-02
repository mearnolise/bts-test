import SectionHead from "./SectionHead";
import News from "./News";

function Info() {
  return (
    <div className="container">
      <SectionHead
        text1={"ข่าวสาร"}
        text2={"และกิจกรรม"}
        text3={"ดูข่าวทั้งหมด >"}
      />
      <div className="row">
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/010765190822550_x360%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%A2-02.jpg"
          title="บีทีเอสเข้มป้องกันโควิด – 19 ต้อนรับเปิดเมือง ขอความร่วมมือผู้โดยสารสวมหน้ากากอนามัยในพื้นที่แออัด"
          date="อัพเดท :: 01 กรกฎาคม 2565"
        />
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/170565191956%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A165_Thumpnail-03.jpg"
          title="บีทีเอส สายสีทอง และบีอาร์ที เข้ม 8 มาตรการป้องกัน COVID–19 ต้อนรับเปิดเทอม"
          date="อัพเดท :: 17 พฤษภาคม 2565"
        />
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/130565112723550X360-02.jpg"
          title="รถไฟฟ้าบีทีเอส หนึ่งในผู้นำระบบขนส่งทางรางของประเทศไทย ร่วมงาน Asia Pacific Rail 2022"
          date="อัพเดท :: 13 พฤษภาคม 2565"
        />
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/130565110245sk65_web-04.jpg"
          title="สงกรานต์ ปีนี้  ผู้สูงวัย เดินทางฟรี ไปกับรถไฟฟ้าบีทีเอส สายสีทอง และบีอาร์ที"
          date="อัพเดท :: 13 พฤษภาคม 2565"
        />
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/280365101403550-%E0%B8%A0%E0%B8%B2%E0%B8%9E_www..jpg"
          title="รถไฟฟ้าบีทีเอส ร่วมรณรงค์ ปิดไฟ 1 ชั่วโมง เพื่อลดโลกร้อน (60+ Earth Hour 2022)"
          date="อัพเดท :: 28 มีนาคม 2565"
        />
        <News
          urls="https://btsapp1.bts.co.th/WebApplication//WareHouse/News/280365101008550-01.jpg"
          title="บีทีเอส เน้นย้ำความปลอดภัย จัดอบรมพัฒนาบุคลากร รถไฟฟ้าบีทีเอส รถไฟฟ้าโมโนเรลสายสีชมพู และสายสีเหลือง"
          date="อัพเดท :: 28 มีนาคม 2565"
        />
      </div>
    </div>
  );
}

export default Info;
