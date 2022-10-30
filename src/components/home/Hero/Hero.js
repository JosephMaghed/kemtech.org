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
                <h1 className="sectionTitle">Explore The Next Big Thing</h1>
              </ScrollAnimate>
              <ScrollAnimate path={"left"}>
                <p className={styles.heroText}>
                  Kemtech summit is the first annual event that provides a
                  platform for Egyptian technological universities to showcase
                  the efforts of the government of Egypt (GOE) in capacitating
                  highly specialized technical cadres to support the
                  technological and industrial sectors in Egypt, the MENA
                  region, and Africa. The forum is an opportunity to connect the
                  industrial sector and investors on the one hand and innovators
                  among the Egyptian youth on the other hand. The forum gives
                  youth a chance to express their ideas and capabilities and
                  know more about the latest trends in technology so they can
                  stay ahead of the curve.
                </p>
              </ScrollAnimate>
              <Button
                innerText="Attend Kemtech Forum"
                type="primary"
                href="/kemtech-forum"
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
