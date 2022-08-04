import Image from "next/image";
import xImg from "assets/x.svg";

//styles
import styles from "./Banner.module.sass";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        Special discount <strong>33%</strong> for early birds + additional
        discount for NCT students.
      </p>
    </div>
  );
};
