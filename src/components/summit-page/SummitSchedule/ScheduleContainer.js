import { useState } from "react";
import styles from "./SummitSchedule.module.sass";
export function ScheduleContainer({
  date,
  mainTitle,
  headingDescription,
  time,
  scheduleData,
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];

  const summitDate = new Date(date);

  console.log();

  return (
    <div className={styles.container}>
      <div className={styles.InfoWrapper}>
        <div className={styles.dateWrapper}>
          <p>{months[summitDate.getMonth()]}</p>
          <p>{summitDate.getDate()}</p>
          <p>{days[summitDate.getDay()]}</p>
        </div>

        <div className={styles.dayWrapper}>
          <small>{headingDescription}</small>
          <h3>{mainTitle}</h3>
          <small>{time}</small>
        </div>
      </div>

      <div className={styles.scheduleContainer}>
        {scheduleData.map((ScheduleData) => (
          <div
            key={ScheduleData.activityTitle}
            className={styles.scheduleWrapper}
          >
            <div>
              <span>
                {ScheduleData.startTime} - {ScheduleData.endTime}
              </span>
            </div>

            <p>{ScheduleData.activityTitle}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
