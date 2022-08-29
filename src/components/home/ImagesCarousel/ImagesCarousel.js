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

export const ImagesCarousel = () => {
  // Import all pictures in assets/carouselPics
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const imagesArr = importAll(
    require.context("assets/carouselPics", false, /\.(png|jpe?g|svg|webp)$/)
  );

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
        {Object.keys(imagesArr).map(
          (x) =>
            // This implementation bypass the duplicated pictures caused by require.context
            // REVIEW: This solution requires more review
            x[0] === "p" && (
              <SwiperSlide key="cPic" className={styles.swiperSlide}>
                <div>
                  <Image src={imagesArr[x].default} alt="" layout="fill" />
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  );
};
