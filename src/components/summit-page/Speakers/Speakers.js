import styles from "./Speakers.module.sass";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import CardVertical from "components/cards/CardVertical";
import Hero from "components/home/Hero";
import { Navigation, Pagination } from "swiper";

export const Speakers = () => {
  const speakersArr = [
    {
      img: null,
      title: "Dr. Omar amin",
      description: "CEO kofta ketchen",
    },
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">Speakers</h2>
      <div className={styles.cardsContainer}>
        {speakersArr.map((x) => (
          <CardVertical
            img={x.img}
            title={x.title}
            description={x.description}
            key={x.title}
          />
        ))}
      </div>
    </section>
  );
};
