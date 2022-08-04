import Button from "components/Button";
import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

//styles
import styles from "./ApplyProcess.module.sass";

//Images
import compare_icon from "assets/compare-icon.svg";
import form_icon from "assets/form-icon.svg";
import presentation_icon from "assets/presentation-icon.svg";
import profit_icon from "assets/profit-icon.svg";

export const ApplyProcess = () => {
  const process = [
    {
      img: form_icon,
      text: "Apply online",
    },
    {
      img: presentation_icon,
      text: "Pitch idea",
    },
    {
      img: compare_icon,
      text: "Join a growth program",
    },
    {
      img: profit_icon,
      text: "Start Innovating!",
    },
  ];

  return (
    <>
      <ScrollAnimate path={"top"}>
        <section className={styles.applyProcess}>
          <ScrollAnimate path={"bottom"}>
            <h2 className="sectionTitleWhite">How to Apply</h2>
          </ScrollAnimate>

          <div className={styles.applyWrapper}>
            {process.map((x) => (
              <ScrollAnimate
                key={x.text.split(" ").join("-")}
                className={styles.applyCard}
                path={"bottom"}
              >
                <div>
                  <Image src={x.img} alt={`${x.text} icon`} height={64} />
                  <p>{x.text}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <div className={styles.centerButton}>
            <Button innerText="Apply Now" type="primary" />
          </div>
        </section>
      </ScrollAnimate>
    </>
  );
};
