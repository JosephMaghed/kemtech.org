import Icon2 from "assets/cil_people.svg";
import Icon3 from "assets/clarity_clock-line.svg";
import Icon4 from "assets/la_hands-helping.svg";
import Icon1 from "assets/la_ticket-alt.svg";
import Image from "next/image";
import styles from "./SummitOverview.module.sass";
export const OverviewIcons = () => {
  return (
    <>
      <div className={styles.icon_container}>
        <div className={styles.icon_div}>
          <div className={styles.icon}>
            <Image
              src={Icon1}
              layout="responsive"
              alt="icon"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.icon_title}>
            <strong>100</strong>
            <p>Attendees</p>
          </div>
        </div>
        <div className={styles.icon_div}>
          <div className={styles.icon}>
            <Image
              src={Icon2}
              layout="responsive"
              alt="icon"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.icon_title}>
            <strong>100</strong>
            <p>Speakers</p>
          </div>
        </div>
        <div className={styles.icon_div}>
          <div className={styles.icon}>
            <Image
              src={Icon3}
              layout="responsive"
              alt="icon"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.icon_title}>
            <strong>100</strong>
            <p>Sessions</p>
          </div>
        </div>
        <div className={styles.icon_div}>
          <div className={styles.icon}>
            <Image
              src={Icon4}
              layout="responsive"
              alt="icon"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.icon_title}>
            <strong>100</strong>
            <p>Sponsors</p>
          </div>
        </div>
      </div>
    </>
  );
};
