import Image from "next/image";
import Button from "components/Button";

//styles
import styles from "./ApplyProcess.module.sass";

//Images
import form_icon from "assets/form-icon.svg";
import presentation_icon from "assets/presentation-icon.svg";
import compare_icon from "assets/compare-icon.svg";
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
    <section className={styles.applyProcess}>
      <h2 className="sectionTitleWhite">How to Apply</h2>
      <div className={styles.applyWrapper}>
        {process.map((x) => (
          <div key={x.text.split(" ").join("-")} className={styles.applyCard}>
            <Image src={x.img} alt={`${x.text} icon`} height={64} />
            <p>{x.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.centerButton}>
        <Button innerText="Apply Now" type="primary" />
      </div>
    </section>
  );
};
