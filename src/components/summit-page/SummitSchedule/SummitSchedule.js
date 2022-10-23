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
          date="2022-11-1"
          scheduleData={dayOneData}
          opened={true}
        />

        <ScheduleContainer
          date="2022-11-2"
          scheduleData={dayTwoData}
        />

        <ScheduleContainer
          date="2022-11-3"
          scheduleData={dayThreeData}
        />

        <h3>Your Path to Entrepreneurship Fellowship</h3>

        <ScheduleContainer
          startDate="2022-11-6"
          endDate="2022-11-24"
          scheduleData={fourWeeksData}
        />

        <h3>Entrepreneurship Exhibition and Investors’ Day</h3>
        <ScheduleContainer
          date="2022-11-28"
          scheduleData={InvestorsWeekStart}
        />

        <ScheduleContainer
        date="2022-11-29"
        scheduleData={InvestorsWeekStart}
      />

      <ScheduleContainer
      date="2022-11-30"
      scheduleData={InvestorsWeekEnd}
    />
      </div>
    </section>
  );
}
