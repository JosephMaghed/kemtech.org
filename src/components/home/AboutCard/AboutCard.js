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
            {` believing in the value of modern technology in all sectors of
            business and in accordance with Egypt 2030's sustainable development
            plan, Kemtech Valley always seeks to increase support and investment
            for technological projects. Therefore, The best partner to
            accomplish this goal was New Cairo University of Technology.`}
          </p>
          <Button innerText="About Us" type="secondary-white" href="/about" />
        </div>
        <div className={styles.rightColumn}>
          {/* <Image src={studentsImg} layout="intrinsic" alt="" /> */}
        </div>
      </div>
    </Fragment>
  );
};
