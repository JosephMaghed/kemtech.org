import { Fragment } from "react";
import Image from "next/image";

// Components
import Button from "components/Button";

// Styles
import styles from "./AboutCard.module.sass";

// Images
import studentsImg from "assets/students.jpg";

export const AboutCard = () => {
  return (
    <Fragment>
      <div className={styles.AboutCard}>
        <div className={styles.leftColumn}>
          <h2>Empowering Technovation In Egypt</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et
            ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit
            volutpat eleifend elit pharetra. Feugiat purus et ornare
            pellentesque. Vivam Lorem ipsum dolor sit amet
          </p>
          <Button innerText="About Us" type="secondary-white" />
        </div>
        <div className={styles.rightColumn}>
          {/* <Image src={studentsImg} layout="intrinsic" alt="" /> */}
        </div>
      </div>
    </Fragment>
  );
};
