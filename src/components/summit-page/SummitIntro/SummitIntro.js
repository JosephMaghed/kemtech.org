import Image from "next/image";
import styles from "./SummitIntro.module.sass";

//imgs
import girlVrImg from "assets/girlVR.png";

export const SummitIntro = () => {
  return (
    <section className={styles.IntroContainer}>
      <div className={styles.text}>
        <h2 className="sectionTitle">Explore The Next Big Thing </h2>
        <p>
        Kemtech summit is the first annual event that provides a platform for Egyptian technological universities to showcase the efforts of the government of Egypt (GOE) in capacitating highly specialized technical cadres to support the technological and industrial sectors in Egypt, the MENA region, and Africa.
The forum is an opportunity to connect the industrial sector and investors on the one hand and innovators among the Egyptian youth on the other hand. The forum gives youth a chance to express their ideas and capabilities and know more about the latest trends in technology so they can stay ahead of the curve.

        </p>
      </div>

      <div className={styles.img}>
        <Image
          alt="Girl wearing a VR in kemtech Summit"
          src={girlVrImg}
          width={300}
          height={327}
        />
      </div>
    </section>
  );
};
