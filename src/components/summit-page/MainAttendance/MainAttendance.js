import CardVertical from "components/cards/CardVertical";
import styles from "./MainAttendance.module.sass";

export const MainAttendance = () => {
  const MainAttendance = [
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
    {
      img: null,
      title: "Dr. mazen amin",
      description: "CEO kofta ketchen",
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <h2 className="sectionTitle">
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
