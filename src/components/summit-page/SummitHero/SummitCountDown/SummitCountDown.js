import Button from "components/Button";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./SummitCountDown.module.sass";
export const SummitCountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let deadline = "November 1, 2022 10:00:00";
  // let deadline = "October 1, 2022 09:00:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    /**
     * Calculate values for variables
      convert the milliseconds to seconds by dividing time by 1000 (because 1000 milliseconds is 1 second).
      remainder (%) operator to reset the values to 0 if, for example, the user passed 86.400.000 as milliseconds, which equals 24 hours.
     */
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // Update Timer
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.timerContainer}>
      <div className={styles.leftContainer}>
        <p> The Forum Starts in: </p>

        <div className={styles.timerWrapper}>
          {seconds <= -1 ? <p>Kemtech Forum is live Now  🎊</p>
        :  
          <div className={styles.timerWrapper}>

            <p>
              <span>{days}</span> Days
            </p>
            <p>
              <span>{hours}</span> Hours
            </p>
            <p>
              <span>{minutes}</span> Minutes
            </p>
            <p>
              <span>{seconds}</span> Seconds
            </p>
          </div>
        }
        </div>
      </div>
      <Button
        href="/kemtech-forum/registration"
        innerText="Register Now"
        type="primary"
      />
    </section>
  );
};
