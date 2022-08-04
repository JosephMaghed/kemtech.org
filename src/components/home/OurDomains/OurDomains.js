import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

//Styles
import styles from "./OurDomains.module.sass";

//Images
import autoRepair_icon from "assets/autoRepair-icon.svg";
import communication_icon from "assets/communication-icon.svg";
import eco_icon from "assets/eco-icon.svg";
import industrialRobot_icon from "assets/industrialRobot-icon.svg";
import prosthesis_icon from "assets/prosthesis-icon.svg";
import pumpjack_icon from "assets/pumpjack-icon.svg";

export const OurDomains = () => {
  const domains = [
    {
      img: eco_icon,
      name: "Renewable Energy",
    },
    {
      img: pumpjack_icon,
      name: " Production, Processing & Transport of Petroleum",
    },
    {
      img: communication_icon,
      name: "Information & communications",
    },
    {
      img: autoRepair_icon,
      name: "Autotronics",
    },
    {
      img: industrialRobot_icon,
      name: "Mechatronics",
    },
    {
      img: prosthesis_icon,
      name: "Prosthetics & Orthotics",
    },
  ];

  return (
    <section className={styles.domainSection}>
      <ScrollAnimate path={"bottom"}>
        <h2 className="sectionTitle">Our domains</h2>
      </ScrollAnimate>
      <div className={styles.domainsContainer}>
        {domains.map((x) => (
          <div key={x.name.split(" ").join("-")} className={styles.domainCard}>
            <ScrollAnimate path={"top"}>
              <Image src={x.img} alt={`${x.name} icon`} />
              <p>{x.name}</p>
            </ScrollAnimate>
          </div>
        ))}
      </div>
    </section>
  );
};
