import { IconHorizontalCard } from "./IconHorizontalCard";
import styles from "./SummitGuides.module.sass";

import { faGears } from "@fortawesome/free-solid-svg-icons";

export const SummitGuides = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className="sectionTitle">Useful Resources</h2>

      <div className={styles.cardsWrapper}>
        <IconHorizontalCard
          title="General Brochure"
          fileType="PDF"
          file={"/docs/factories guide.pdf"}
        />

        <IconHorizontalCard
          title="Flyer"
          fileType="PDF"
          file={"/docs/factories guide.pdf"}
        />

        <IconHorizontalCard
          icon={faGears}
          title="Factories Guide"
          fileType="PDF"
          file={"/docs/factories guide.pdf"}
        />
      </div>
    </section>
  );
};
