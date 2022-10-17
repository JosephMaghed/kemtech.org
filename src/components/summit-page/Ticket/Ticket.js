import ticketTemp from "assets/ticket-tep.png";
import Image from "next/image";
import styles from "./Ticket.module.sass";
export const Ticket = ({ name, email }) => {
  return (
    <div className={styles.ticketWrapper}>
      <Image alt="Tickt" src={ticketTemp} loading="eager" />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
};
