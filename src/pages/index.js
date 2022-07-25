import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//page Components
import AboutCard from "components/home/AboutCard";
import Hero from "components/home/Hero";
import Accelerators from "components/home/Accelerators";
import OurDomains from "components/home/OurDomains";
import ApplyProcess from "components/home/ApplyProcess";
import InitiativeGoals from "components/home/InitiativeGoals";
import ContactForm from "components/ContactForm";
import ProgramsView from "components/ProgramsView";

//Carousel pics
import pic1 from "assets/carouselPics/pic1.jpg";
import pic2 from "assets/carouselPics/pic2.jpg";
import pic3 from "assets/carouselPics/pic3.jpg";
import pic4 from "assets/carouselPics/pic4.jpg";
import pic5 from "assets/carouselPics/pic5.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kemtech Valley وادي التكنولوجيا المصري</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <AboutCard />
      <Accelerators />
      <OurDomains />
      <ApplyProcess />
      {/* <ProgramsView /> */}

      <div className={styles.carouselContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.carouselSwiper}
        >
          <SwiperSlide className={styles.carouselSlide}>
            <Image alt="" src={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src={pic3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src={pic4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" src={pic5} />
          </SwiperSlide>
        </Swiper>
      </div>

      <InitiativeGoals />
      <ContactForm />
    </>
  );
}
