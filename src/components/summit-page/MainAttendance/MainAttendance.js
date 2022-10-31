import CardVertical from "components/cards/CardVertical";
import styles from "./MainAttendance.module.sass";

// imgs
import holdingChairImg from 'assets/people/abd-elaziz-mandour.jpg';
import tradeMinImg from 'assets/people/ahmed-samir.jpg';
import nctuPrsImg from 'assets/people/hesham-eldeep.jpg';
import chinaAmbImg from 'assets/people/liao-liqiang.jpg';
import medhat from "assets/people/medhat-hussien.jpeg";
import eduMinImg from 'assets/people/mohamed-ashour.jpg';
import milMinImg from 'assets/people/mohamed-salah-eldin.jpeg';
import moserry from 'assets/people/mohamed-seery.jpeg';
import pertoMinImg from 'assets/people/tarek-elmoula.jpg';
import oroChairImg from 'assets/people/tarek-mohamed.jpeg';

export const MainAttendance = () => {
  const MainAttendance = [
    {
      img: eduMinImg,
      title: "H.E. Prof. Mohamed Ayman Ashour",
      description: "Minster of Higher Education & Scientific Research",
    },
    {
      img: tradeMinImg,
      title: "H.E. Eng. Ahmed Samir",
      description: "Minster of Trade & Industry",
    },
    {
      img: milMinImg,
      title: "H.E. Eng. Mohamed Salah El-Din",
      description: "Minster of State for Military Production",
    },
    {
      img: pertoMinImg,
      title: "H.E. Eng. Tarek El-Moula",
      description: "Minster of State for Petroleum & Mineral Resources",
    },
    {
      img: chinaAmbImg,
      title: "H.E. Liao Liqiang",
      description: "Chinese Ambassador to Egypt",
    },
    {
      img: holdingChairImg,
      title: "Eng. Abdel-aziz Mandour",
      description: "Chairman of PTS Holdings",
    },
    {
      img: oroChairImg,
      title: "Eng. Tarek Mohamed",
      description: "Chairman of ORO Capital Group",
    },
    {
      img: moserry,
      title: "Eng. Mohamed serry",
      description: "Founder and CEO Mentors' Group",
    },
    {
      img: medhat,
      title: "Medhat El Husseiny",
      description: "Chief Technology Officer at Etisalat Misr",
    },
    {
      img: nctuPrsImg,
      title: "Prof. Dr. Hesham Eldeeb",
      description: "President of New Cairo Technological University",
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <h2 className="summitTitle">
        VIP<small>s</small>
      </h2>
      <div className={styles.cardsContainer}>
        {MainAttendance.map((x) => (
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
