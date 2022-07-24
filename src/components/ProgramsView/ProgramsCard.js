import Button from "components/Button";
import Image from "next/image";
import styles from "./ProgramsCard.module.sass";

export const ProgramCard = (props) => {
  let { name, img, href } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image src={img} alt={name} />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          href={`/programs/${href}`}
          type="secondary-black"
          innerText="Read more"
        />
      </div>
    </div>
  );
};
