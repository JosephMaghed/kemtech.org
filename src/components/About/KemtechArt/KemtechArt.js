import Image from "next/image";

//styles
import styles from "./KemtechArt.module.sass";

// imgs
import art from "assets/Kemtech-art.svg";
import shape from "assets/shape-blue.svg";

export const KemtechArt = () => {
  return (
    <section className={styles.artSection}>
      <div>
        <Image src={art} alt="Kemtech name origin art " />
      </div>

      <div className={styles.shape}>
        <Image src={shape} alt="yellow blob" />
      </div>
    </section>
  );
};
