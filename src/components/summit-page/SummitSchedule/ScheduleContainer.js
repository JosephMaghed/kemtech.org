import { useState } from "react";
import styles from "./SummitSchedule.module.sass";
export function ScheduleContainer({
  date,
  scheduleData,
  opened,
  startDate,
  endDate,
}) {

  // Opened State 
  const [isOpened, setOpened] = useState(opened || false)
  
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

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const summitDate = new Date(date);

  if(startDate && endDate){
    startDate = new Date(startDate)
    endDate = new Date(endDate)
  }

  return (
    <div className={styles.container}>
      <div className={isOpened ? styles.InfoWrapperActive : styles.InfoWrapper} onClick={()=>setOpened(!isOpened)}>
        {startDate && endDate ?
          <div>
            <p>{months[startDate.getMonth()]}</p>
            <p>{startDate.getDate()}</p>
            <p>to</p>
            <p>{months[endDate.getMonth()]}</p>
            <p>{endDate.getDate()}</p>

          </div>
          : 
          <div>
            <p>{months[summitDate.getMonth()]}</p>
            <p>{summitDate.getDate()}</p>
            <p>{days[summitDate.getDay()+1]}</p>
          </div>
        }
      </div>

      <div className={isOpened ? styles.scheduleContainer : styles.scheduleContainerHidden}>
        {scheduleData.map((ScheduleData) => (
          <div
            key={ScheduleData.activityTitle}
            className={styles.scheduleWrapper}
          >
            <span>
                {ScheduleData.startTime} - {ScheduleData.endTime}
            </span>
            <div className={styles.activityDetails}>
               <p>{ScheduleData.activityTitle}</p>
               {ScheduleData.description && <em>{ScheduleData.description}</em>}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
