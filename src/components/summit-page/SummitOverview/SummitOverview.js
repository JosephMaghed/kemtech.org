/* eslint-disable react/no-unescaped-entities */
import { OverviewIcons } from "./OverviewIcons";
import styles from "./SummitOverview.module.sass";

export const SummitOverview = () => {
  return (
    <section className={styles.overview_container}>
      <div>
        <h4 className="summitTitle">Overview</h4>
      </div>
      <div>
        <p>
        The Forum will be the official launch of "Kemtech Studio" on NCTU premises.
        <br/>
        <br/>
        The studio is mainly focused on supporting the entrepreneurs during their startup journey,
         whereas the valley adopts a one-stop shop approach for startups and then they apply
          significant amounts of time and capital to the process of growing the startup successfully.
        </p>
      </div>
      {/* <OverviewIcons /> */}
    </section>
  );
};
