import Image from "next/image";

//styles
import styles from "./Accelerators.module.sass";

//img
import kemetaLogo from "assets/kemeta.svg";
import kemtizeLogo from "assets/kemtize.svg";
import kemtronixLogo from "assets/kemtronix.svg";
import ScrollAnimate from "react-scroll-fade-animation";

export const Accelerators = () => {
  const Accelerators = [
    {
      img: kemtizeLogo,
      alt: "kemtize logo",
      description:
        "Mainly focus on Digitalization Platforms industry wide that support improving world living standards e.g. Health-tech, Edu-tech, Fin-tech, etc...",
    },
    {
      img: kemtronixLogo,
      alt: "kemtronix logo",
      description:
        "Mainly focus on applied technologies/ Advanced Technological Industries that requires manufacturing production lines e.g. Agri-tech, mining-tech, etc...",
    },
    {
      img: kemetaLogo,
      alt: "kemeta logo",
      description:
        "Mainly focus on disruptive technologies that introduce an entirely new business model and a new growth market e.g. metaverse, Blockchain, etc...",
    },
  ];

  return (
    <section className={styles.accelSection}>
      <ScrollAnimate path={"bottom"}>
        <h2 className="sectionTitle">Studio Programs</h2>
      </ScrollAnimate>
      {Accelerators.map((x, i = 0) => {
        i++;
        return (
          <div key={x.alt.replace(" ", "-")}>
            <ScrollAnimate path={i % 2 === 0 ? "right" : "left"}>
              <Image src={x.img} alt={x.alt} height={50} />
              <p>{x.description}</p>
            </ScrollAnimate>
          </div>
        );
      })}
    </section>
  );
};
