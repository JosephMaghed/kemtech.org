import Image from "next/image";
import styles from "./CardVertical.module.sass";

import defaultImg from "assets/No_image_available.png";

export const CardVertical = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          alt=""
          src={props.img || defaultImg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContainer}>
        <h3>
          <b>{props.title}</b>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
