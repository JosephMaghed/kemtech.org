import Image from "next/image";
import styles from "./ImagesCarousel.module.sass";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import pic01 from "assets/carouselPics/pic01.webp";
import pic02 from "assets/carouselPics/pic02.webp";
import pic03 from "assets/carouselPics/pic03.webp";
import pic04 from "assets/carouselPics/pic04.webp";
import pic05 from "assets/carouselPics/pic05.webp";

export const ImagesCarousel = () => {
  let picArr = [pic03, pic01, pic02, pic04, pic05];
  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {picArr.map((x) => (
          <SwiperSlide key="cPic" className={styles.swiperSlide}>
            <div>
              <Image src={x} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
