import Custom404 from "components/404";
import ActivityCard from "components/ActivityCard";
import { programsData } from "data/programsData";
import Image from "next/image";

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

  return (
    <section className={styles.programPageContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.leftColumn}>
          <h1 className="sectionTitle">{programsData[pId].name}</h1>
          <p>{programsData[pId].description}</p>
        </div>
        <div className={styles.rightColumn}>
          <Image src={programsData[pId].img} alt="" />
        </div>
      </div>

      {!programsData[pId].activities ? (
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
              programsData[pId].activities.active.map((x) => (
                <ActivityCard
                  key={x.name}
                  name={x.name}
                  description={x.description}
                  href={x.href}
                  colors={x.color}
                />
              ))
            ) : (
              <p className={styles.noAct}>
                {" "}
                No activities available currently for this program!
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
