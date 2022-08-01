import Image from "next/image";
import { Fragment } from "react";

// Components imports
import Button from "components/Button";

// styles import
import styles from "./Hero.module.sass";

// images import
import holdingLogo from "assets/holding.svg";
import heroArt from "assets/home-heroArt.png";
import nctuLogo from "assets/nctu.png";
import oroLogo from "assets/oro-black.svg";

export const Hero = () => {
  return (
    <Fragment>
      <div className={styles.heroSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftTop}>
            <h1 className="sectionTitle">Rendering your dreams into reality</h1>
            <p className={styles.heroText}>
              The “Egyptian Applied Technological Valley - Kemtech Valley”
              initiative aims to build highly specialized technical cadres and
              develop the creative capabilities of Egyptian youth, as well as
              support start- ups, small and medium-sized companies in the field
              of applied technology and build digital community awareness
              through various programs.
            </p>
            <Button
              innerText="Apply Now"
              type="primary"
              href="https://forms.gle/aYFK3WT3k3byXyNT7"
            />
          </div>
          <div className={styles.leftBottom}>
            <div>
              <p>Powered by</p>
              <Image
                src={holdingLogo}
                layout="responsive"
                alt="pts holing logo"
              />
            </div>
            <div>
              <p>In association with</p>
              <Image
                src={nctuLogo}
                layout="responsive"
                alt="New cairo technological university logo "
              />
            </div>
            <div>
              <p>Delivered by</p>

              <Image
                src={oroLogo}
                layout="responsive"
                alt="oro ventures logo"
              />
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
