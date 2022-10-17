import Button from "components/Button";
import styles from "./SummitHero.module.sass";

// images import
import nctuLogo from "assets/nctu-white.svg";
import oroLogo from "assets/oroVentures-white.svg";
import ptsProjectsLogo from "assets/ptsProjects-white.svg";
import Image from "next/image";
import SummitCountDown from "./SummitCountDown";

export const SummitHero = () => {
  let sponsorsLogos = [
    {
      txt: "POWERED BY",
      img: ptsProjectsLogo,
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
    <section className={styles.heroContainer}>
      <div className={styles.heroContentContainer}>
        <div className={styles.rightContainer}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleTopWrapper}>
              <h1>
                Kemtech
                <br />
                <span>FORUM</span>
              </h1>
              <h2>
                20
                <br />
                22
              </h2>
            </div>
            {/* <p>25 OCT - 26 OCT - 27 OCT</p> */}
          </div>

          {/* <h2>The First Metaverse Focused Summit in Egypt</h2> */}
          <h2>Under The Auspices of</h2>
          <h2 className={styles.ministerName}>H.E. DR. Mohamed Ayman Ashour</h2>
          {/* <p>Under the Auspices Of The Minister Of Higher Education</p> */}
          <p>Minister Of Higher Education and Scientific Research</p>

          <div className={styles.buttonsWrapper}>
            <Button
              innerText="Register Now"
              type="primary"
              href="/kemtech-forum/registration"
            />

            <Button
              innerText="Become a sponsor"
              type="secondary-white"
              href="/kemtech-forum/sponsors/registration"
            />
          </div>
        </div>

        <div className={styles.leftContainer}>
          {sponsorsLogos.map((x) => (
            <div key={x.txt}>
              <p>{x.txt}</p>
              <Image src={x.img} alt={x.imgAlt} layout="responsive" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.counterBanner}>
        <SummitCountDown />
      </div>
    </section>
  );
};
