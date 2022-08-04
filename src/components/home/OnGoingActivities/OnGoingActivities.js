import ActivityCard from "components/ActivityCard";
import { programsData } from "data/programsData";
import ScrollAnimate from "react-scroll-fade-animation";

//styles
import styles from "./OnGoingActivities.module.sass";

export const OnGoingActivities = () => {
  const ActiveActivities =
    programsData["training-&-career-development-program"].activities.active;
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">On going activities</h2>
      <div className={styles.cardsContainer}>
        {Object.keys(ActiveActivities).map((x) => (
          <div className={styles.cardWrapper} key={ActiveActivities[x].name}>
            <ActivityCard
              title={ActiveActivities[x].name}
              href={ActiveActivities[x].href}
              colors={ActiveActivities[x].color}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
