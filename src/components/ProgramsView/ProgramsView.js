import { programsData } from "data/programsData";
import { ProgramCard } from "./ProgramsCard";

//styles
import styles from "./ProgramsView.module.sass";

export const ProgramsView = () => {
  return (
    <section className={styles.programsViewContainer}>
      {Object.keys(programsData).map((key) => {
        let program = programsData[key];
        return (
          <ProgramCard
            img={program.img}
            key={key}
            name={program.name}
            href={key}
          />
        );
      })}
    </section>
  );
};
