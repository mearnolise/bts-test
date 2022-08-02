import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function SliderTop() {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ zIndex: 0 }}
      >
        <SwiperSlide>
          <img
            className="w-100"
            src="https://btsapp1.bts.co.th/WebApplication/storage_file/files/Banner-homepage_1500x350px-TH.jpg"
            alt="image1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            src="https://btsapp1.bts.co.th/WebApplication/storage_file/files/AW-Banner-web-%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99-1500x350.jpg"
            alt="image2"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderTop;
