import Image from "next/image";

//styles
import styles from "./Accelerators.module.sass";

//img
import kemetaLogo from "assets/kemeta.svg";
import kemtizeLogo from "assets/kemtize.svg";
import kemtronixLogo from "assets/kemtronix.svg";

export const Accelerators = () => {
  const Accelerators = [
    {
      img: kemtizeLogo,
      alt: "kemtize logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque. Vivam Lorem ipsum dolor sit amet",
    },
    {
      img: kemtronixLogo,
      alt: "kemtronix logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque. Vivam Lorem ipsum dolor sit amet",
    },
    {
      img: kemetaLogo,
      alt: "kemeta logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque. Vivam Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <section className={styles.accelSection}>
      <h2 className="sectionTitle">Studio Programs</h2>
      {Accelerators.map((x) => (
        <div key={x.alt.replace(" ", "-")}>
          <Image src={x.img} alt={x.alt} height={50} />
          <p>{x.description}</p>
        </div>
      ))}
    </section>
  );
};
