// styles
import styles from "./404.module.sass";
// imgs
import underConstructionSVG from "assets/Under-construction.svg";
import Image from "next/image";
import Button from "components/Button";

export const Custom404 = () => {
  return (
    <section className={styles.underConstruction}>
      <Image src={underConstructionSVG} alt="" />

      <div>
        <h1>Kemtech is under construction !</h1>
        <p>Please come again later</p>
        <Button type="secondary-black" innerText="Return to kemtech" href="/" />
      </div>
    </section>
  );
};
