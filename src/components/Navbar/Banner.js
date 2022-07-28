import Image from "next/image";
import xImg from "assets/x.svg";

//styles
import styles from "./Banner.module.sass";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        All trainings are available at <strong>100 L.E.</strong> only for all
        NCT students 🎉
      </p>
    </div>
  );
};
