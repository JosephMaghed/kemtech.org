import { ScheduleContainer } from "./ScheduleContainer";
import { dayOneData, dayThreeData, dayTwoData } from "./scheduleData";
import styles from "./SummitSchedule.module.sass";

export function SummitSchedule() {
  return (
    <section className={styles.mainContainer}>
      <h2 className="sectionTitle">Schedule</h2>
      <div className={styles.ScheduleContainersWrapper}>
        <ScheduleContainer
          date="2022-10-25"
          mainTitle="Opening Day"
          headingDescription="First Day"
          time="09:00 - 16:00"
          scheduleData={dayOneData}
        />

        <ScheduleContainer
          date="2022-10-26"
          mainTitle="Investors Day"
          headingDescription="Second Day"
          time="09:00 - 16:00"
          scheduleData={dayTwoData}
        />

        <ScheduleContainer
          date="2022-10-27"
          mainTitle="Job Fair Day"
          headingDescription="Third Day"
          time="09:00 - 16:00"
          scheduleData={dayThreeData}
        />
      </div>
    </section>
  );
}
