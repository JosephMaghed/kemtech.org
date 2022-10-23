import CardVertical from "components/cards/CardVertical";
import styles from "./MainAttendance.module.sass";

// imgs
import holdingChairImg from 'assets/people/abd-elaziz-mandour.jpg';
import tradeMinImg from 'assets/people/ahmed-samir.jpg';
import nctuPrsImg from 'assets/people/hesham-eldeep.jpg';
import chinaAmbImg from 'assets/people/liao-liqiang.jpg';
import eduMinImg from 'assets/people/mohamed-ashour.jpg';
import milMinImg from 'assets/people/mohamed-salah-eldin.jpeg';
import oroChairImg from 'assets/people/tarek-mohamed.jpeg';

export const MainAttendance = () => {
  const MainAttendance = [
    {
      img: eduMinImg,
      title: "H.E. DR. Mohamed Ashour",
      description: "Minster of higher education & scientific research",
    },
    {
      img: tradeMinImg,
      title: "H.E. Ahmed Samir",
      description: "Minster of trade & industry",
    },
    {
      img: milMinImg,
      title: "H.E. Mohamed Salah Eldin",
      description: "Minster of state for military production",
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
      img: chinaAmbImg,
      title: "H.E. Liao Liqiang",
      description: "Chinese Ambassador to Egypt",
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
