/* eslint-disable react/no-unescaped-entities */
import { OverviewIcons } from "./OverviewIcons";
import styles from "./SummitOverview.module.sass";

export const SummitOverview = () => {
  return (
    <section className={styles.overview_container}>
      <div>
        <h4 className="sectionTitle">Overview</h4>
      </div>
      <div>
        <p>
          The "Egyptian Applied Technological Valley-Kemtech valley" initiative
          aims to build highly specialized technical cadres and develop the
          creative capabilities of egyptian youth, as well as support START-UPS,
          small and medium-sized companies in the field of applied technology
          and build digital community awareness through various programs
        </p>
      </div>
      <OverviewIcons />
    </section>
  );
};
