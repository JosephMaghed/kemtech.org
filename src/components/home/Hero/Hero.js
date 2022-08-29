import Image from "next/image";
import { Fragment } from "react";
import ScrollAnimate from "react-scroll-fade-animation";

// Components imports
import Button from "components/Button";

// styles import
import styles from "./Hero.module.sass";

// images import
import holdingLogo from "assets/holding.svg";
import heroArt from "assets/home-heroArt.webp";
import nctuLogo from "assets/nctu.svg";
import oroLogo from "assets/oro-black.svg";

export const Hero = () => {
  let sponsorsLogos = [
    {
      txt: "Powered by",
      img: holdingLogo,
      imgAlt: "Pts projects logo",
    },
    {
      txt: "IN ASSOCIATION WITH",
      img: nctuLogo,
      imgAlt: "New Cairo University of Technology logo",
    },
    {
      txt: "DELIVERED BY",
      img: oroLogo,
      imgAlt: "Oro venture labs logo",
    },
  ];
  return (
    <Fragment>
      <div className={styles.heroSection}>
        <div className={styles.leftColumn}>
          <ScrollAnimate path={"bottom"}>
            <div className={styles.leftTop}>
              <ScrollAnimate path={"right"}>
                <h1 className="sectionTitle">
                  Rendering your dreams into reality
                </h1>
              </ScrollAnimate>
              <ScrollAnimate path={"left"}>
                <p className={styles.heroText}>
                  The “Egyptian Applied Technological Valley - Kemtech Valley”
                  initiative aims to build highly specialized technical cadres
                  and develop the creative capabilities of Egyptian youth, as
                  well as support start- ups, small and medium-sized companies
                  in the field of applied technology and build digital community
                  awareness through various programs.
                </p>
              </ScrollAnimate>
              <Button
                innerText="Apply Now"
                type="primary"
                href="/programs/training-&-career-development-program"
              />
            </div>
            <div className={styles.leftBottom}>
              {sponsorsLogos.map((x) => (
                <div key={x.txt}>
                  <p>{x.txt}</p>
                  <Image src={x.img} layout="responsive" alt={x.imgAlt} />
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
        <ScrollAnimate path={"left"}>
          <div className={styles.rightColumn}>
            <Image src={heroArt} alt="kemtech technology art" />
          </div>
        </ScrollAnimate>
      </div>
    </Fragment>
  );
};
