//styles
import ScrollAnimate from "react-scroll-fade-animation";
import styles from "./InitiativeGoals.module.sass";

export const InitiativeGoals = () => {
  return (
    <section className={styles.goalsSection}>
      <p className={styles.subtitle}>Your entrepreneurship Companion</p>
      <h2 className="sectionTitleWhite">Initiative Goals</h2>
      <div className={styles.cardWarperOne}>
        <ScrollAnimate path="top">
          <div className={styles.culture}>
            <p className={styles.cardTitle}>Culture</p>
            <p className={styles.cardText}>
              Enriching the culture of entrepreneurship, innovation and
              investment in the promising Egyptian minds
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate path="top">
          <div className={styles.aware}>
            <div>
              <p className={styles.cardTitle}>Awareness</p>
            </div>
            <p className={styles.cardText}>
              Contribute in building societal awareness based on digital and
              information technology
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate path="top">
          <div className={styles.util}>
            <p className={styles.cardTitle}>Utlization</p>
            <p className={styles.cardText}>
              Maximizing the utilization of scientific cadres and specialized
              experts
            </p>
          </div>
        </ScrollAnimate>
      </div>

      <div className={styles.cardWarperTwo}>
        <ScrollAnimate path="top">
          <div className={styles.upgrade}>
            <p className={styles.cardTitle}>Upgrade</p>
            <p className={styles.cardText}>
              Upgrading the Egyptian technological industries by qualifying them
              to compete in global markets and developing innovative thought
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate path="top">
          <div className={styles.tecnovate}>
            <p className={styles.cardTitle}>Technovate In Egypt</p>
            <p className={styles.cardText}>
              {`Creating a forum to communicate with local and international
            investment channels, Global marketing of Egyptian products and
            applications under the slogan "Technovate in Egypt"`}
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};
