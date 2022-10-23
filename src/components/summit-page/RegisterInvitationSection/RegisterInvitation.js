import invitationTempImg from "assets/invitation-summit.png";
import Button from "components/Button";
import Image from "next/image";
import styles from "./RegisterInvitation.module.sass";

export const RegisterInvitation = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className="summitTitle">
        Get Your invitation now for <em>FREE</em>
      </h2>
      <div className={styles.imgWrapper}>
        <Image
          alt="Kemtech Summit Ticket"
          src={invitationTempImg}
          layout="responsive"
          width={1280}
          height={462}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          innerText="Register Now"
          type="primary"
          href="/kemtech-forum/registration"
        />
      </div>
    </section>
  );
};
