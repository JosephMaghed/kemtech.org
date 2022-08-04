import Custom404 from "components/404";
import ActivityCard from "components/ActivityCard";
import Accelerators from "components/home/Accelerators";
import { programsData } from "data/programsData";
import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

// styles
import styles from "./ProgramPage.module.sass";

export const ProgramPage = (props) => {
  // Get the program Id
  const { pId } = props;

  // If the id is not correct return 404
  // the Parent page ==> pages/program/progId/index.js handles redirection to 404
  // this code serve as a safe guard from building errors
  let programsList = Object.keys(programsData);
  if (!programsList.includes(pId)) return <Custom404 />;

  // Active program
  const ActiveActivities = programsData[pId].activities.active;

  return (
    <section className={styles.programPageContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.leftColumn}>
          <ScrollAnimate path="bottom">
            <h1 className="sectionTitle">{programsData[pId].name}</h1>
          </ScrollAnimate>
          <ScrollAnimate path="right">
            <p>{programsData[pId].description}</p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate path="left">
          <div className={styles.rightColumn}>
            <Image src={programsData[pId].img} alt="" />
          </div>
        </ScrollAnimate>
      </div>
      {pId === "startup-studio-program" ? (
        <Accelerators />
      ) : programsData[pId].activities === null ? (
        //if no activities available or null
        <div>
          <h3 className={styles.programsSectionTitle}>Program Activities</h3>
          <p className={styles.noAct}>
            {" "}
            No activities available currently for this program !
          </p>
        </div>
      ) : (
        <div>
          <h3 className={styles.programsSectionTitle}>
            Active Program Activities
          </h3>
          <div className={styles.cardsContainer}>
            {programsData[pId].activities.active ? (
              Object.keys(ActiveActivities).map((x) => (
                <div
                  className={styles.cardWrapper}
                  key={ActiveActivities[x].name}
                >
                  <ActivityCard
                    title={ActiveActivities[x].name}
                    href={ActiveActivities[x].href}
                    colors={ActiveActivities[x].color}
                  />
                </div>
              ))
            ) : (
              // Noa active activities
              <p className={styles.noAct}>
                {" "}
                No activities available currently for this program !
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
