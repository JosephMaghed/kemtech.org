import Image from "next/image";

//styles
import styles from "./FoundersWord.module.sass";

//imgs
import holdingLogo from "assets/holding.svg";
import signaturePic from "assets/signature.svg";
import ScrollAnimate from "react-scroll-fade-animation";

export const FoundersWord = () => {
  return (
    <section className={styles.founderWords}>
      <ScrollAnimate path="bottom">
        <h1 className="sectionTitle">Our Founder is saying about Kemtech</h1>
      </ScrollAnimate>

      <ScrollAnimate path="top">
        <div className={styles.wordCard}>
          <p>
            “ Looking to the current entrepreneurial ecosystem, I have found
            most of our creative minds and entrepreneurs hardily struggle during
            their startup journey and some of them unfortunately failed during
            this journey , only because they couldn’t find the right support on
            the right time. Kemtech Valley was established upon a dream to have
            an effective collaboration between financial investments
            institutions, Industry leaders and academic institutions mainly to
            support our creative youth secure seed funding &amp; enabling them
            to the globe through providing tailored in-kind supportive and
            functional services. At Kemtech Valley initiative, we are welcoming
            all like-minded leaders to be part of our initiative and take an
            effective role in the journey.”
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
      </ScrollAnimate>
    </section>
  );
};
