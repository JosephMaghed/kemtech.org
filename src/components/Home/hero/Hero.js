import { Fragment } from "react";
import Image from "next/image";

// Components imports
import PrimaryButton from "components/PrimaryButton";

// styles import
import styles from "./Hero.module.sass";

// images import
import heroArt from "assets/home-heroArt.png";
import holdingLogo from "assets/holding.svg";
import oroLogo from "assets/oro-black.svg";
import nctuLogo from "assets/nctu.png";

export const Hero = () => {
  return (
    <Fragment>
      <div className={styles.heroSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftTop}>
            <h1 className={styles.heroTitle}>
              Rendering your dreams into reality
            </h1>
            <p className={styles.heroText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et
              ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit
              volutpat eleifend elit pharetra. Feugiat purus et ornare
              pellentesque. Vivam Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Turpis et ipsum volutpat morbi eget posuere
              morbi. Vitae leo volutpat elit volutpat eleifend elit pharetra.
              Feugiat purus et ornare pellentesque. Vivam
            </p>
            <PrimaryButton innerText="Apply Now" />
          </div>
          <div className={styles.leftBottom}>
            <div>
              <p>Powered by</p>
              <Image src={holdingLogo} alt="pts holing logo" />
            </div>
            <div>
              <p>In association with</p>
              <Image
                src={nctuLogo}
                alt="New cairo technological university logo "
              />
            </div>
            <div>
              <p>Delivered by</p>
              <Image src={oroLogo} alt="oro ventures logo" />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Image src={heroArt} alt="kemtech technology art" />
        </div>
      </div>
    </Fragment>
  );
};
