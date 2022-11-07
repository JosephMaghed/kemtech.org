import { ScheduleContainer } from "./ScheduleContainer";
import { dayOneData, dayThreeData, dayTwoData, fourWeeksData, InvestorsWeekEnd, InvestorsWeekStart } from "./scheduleData";
import styles from "./SummitSchedule.module.sass";

export function SummitSchedule() {
  return (
    <section className={styles.mainContainer}>
      <h2 className="summitTitle">Agenda</h2>
      <div className={styles.ScheduleContainersWrapper}>

        <h3>Conference on Entrepreneurship, Innovation and Employment for Technological Universities</h3>
        <ScheduleContainer
          date="November, 1, 2022"
          scheduleData={dayOneData}
        />

        <ScheduleContainer
          date="November, 2, 2022"
          scheduleData={dayTwoData}
        />

        <ScheduleContainer
          date="November, 3, 2022"
          scheduleData={dayThreeData}
        />

        <h3>Your Path to Entrepreneurship Fellowship</h3>

        <ScheduleContainer
          startDate="November, 6, 2022"
          endDate="November, 24, 2022"
          scheduleData={fourWeeksData}
          opened={true}
        />

        <h3>Entrepreneurship Exhibition and Investors’ Day</h3>
        <ScheduleContainer
          date="November, 28, 2022"
          scheduleData={InvestorsWeekStart}
        />

        <ScheduleContainer
        date="November, 29, 2022"
        scheduleData={InvestorsWeekStart}
      />

      <ScheduleContainer
      date="November, 30, 2022"
      scheduleData={InvestorsWeekEnd}
    />
      </div>
    </section>
  );
}
