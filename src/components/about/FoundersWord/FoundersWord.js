import Image from "next/image";

//styles
import styles from "./FoundersWord.module.sass";

//imgs
import holdingLogo from "assets/holding.svg";
import signaturePic from "assets/signature.svg";

export const FoundersWord = () => {
  return (
    <section className={styles.founderWords}>
      <h1 className="sectionTitle">
        This what our founders are saying about Kemtech
      </h1>

      <div className={styles.wordCard}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et
          ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit
          volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque.
          Vivam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit
          volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque.
          Vivam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit
          volutpat eleifend elit pharetra.
        </p>

        <div className={styles.picsWrapper}>
          <div className={styles.signaturePic}>
            <Image src={signaturePic} alt="  " />
          </div>

          <div className={styles.holdingPic}>
            <Image src={holdingLogo} alt="  " />
          </div>
        </div>
      </div>
    </section>
  );
};
