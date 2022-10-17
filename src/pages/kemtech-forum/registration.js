import FindTicketForm from "components/summit-page/FindTicketForm";
import RegistrationForm from "components/summit-page/RegisterForm";
import Head from "next/head";
import { useState } from "react";
import ScrollAnimate from "react-scroll-fade-animation";

import styles from "styles/Registration.module.sass";

import svgIllustration from "assets/Innovation-amico.svg";
import Image from "next/image";

export default function RegistrationPage() {
  const REGISTRATION_FORM = "REGISTRATION_FORM";
  const FIND_TICKET_FORM = "FIND_TICKET_FORM";

  const [form, setForm] = useState(REGISTRATION_FORM);

  return (
    <section className={styles.mainContainer}>
      <Head>
        <title>Kemtech Summit Registration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.leftContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleTopWrapper}>
            <h1>
              Kemtech
              <br />
              <span>FORUM</span>
            </h1>
            <h2>
              20
              <br />
              22
            </h2>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image alt="Innovative icon" src={svgIllustration} height={350} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightInnerContainer}>
          <div>
            <ul className={styles.tabsWrap}>
              <li
                data-tabs="register-now"
                onClick={() => setForm(REGISTRATION_FORM)}
                className={`${styles.registerTab} ${
                  form === REGISTRATION_FORM && styles.activeTab
                }`}
              >
                Register Now
              </li>
              <li
                data-tabs="find-invitation"
                onClick={() => setForm(FIND_TICKET_FORM)}
                className={`${styles.registerTab} ${
                  form === FIND_TICKET_FORM && styles.activeTab
                }`}
              >
                Find Your Invitation
              </li>
            </ul>
          </div>

          {form === REGISTRATION_FORM ? (
            <ScrollAnimate path={"left"}>
              <RegistrationForm />
            </ScrollAnimate>
          ) : (
            <ScrollAnimate path={"right"}>
              <FindTicketForm />
            </ScrollAnimate>
          )}
        </div>
      </div>
    </section>
  );
}
