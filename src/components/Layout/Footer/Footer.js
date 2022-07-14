import { Fragment } from "react";
import kemtechLogo from "assets/kemtech-simi-white.svg";
import instaLogo from "assets/insta-mono.svg";
import linkedinLogo from "assets/linkedin-mono.svg";
import facebookLogo from "assets/face-mono.svg";
import Image from "next/image";
import Link from "next/link";
import { programsData } from "data/programsData";
import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.topLeft}>
          <Image src={kemtechLogo} alt="kemtech logo" />
        </div>
        <div className={styles.topRight}>
          {/* Programs column dynamically created form programData */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Initiative programs</h4>
            <ul>
              {programsData.map((program) => (
                <Link
                  key={`/programs/${program.name.split(" ").join("-")}`}
                  href={`/programs/${program.name.split(" ").join("-")}`}
                >
                  <li className={styles.columnRow}>
                    {program.name.replace("Program", "")}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Follow us</h4>
            <ul>
              <li className={styles.social}>
                <a
                  href="https://www.facebook.com/Kemtechian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image alt="facebook icon" src={facebookLogo} />
                  <span>Kemtechian</span>
                </a>
              </li>

              <li className={styles.social}>
                <a
                  href="https://instagram.com/kemtechian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image alt="Instagram icon" src={instaLogo} />
                  <span>Kemtechian</span>
                </a>
              </li>

              <li className={styles.social}>
                <a
                  href="https://www.linkedin.com/company/kemtech-valley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image alt="Linkedin logo" src={linkedinLogo} />
                  <span>Kemtech valley</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <ul>
              <Link href={"/faq"}>
                <li className={styles.columnRow}>FAQ</li>
              </Link>
              <Link href={"/contact"}>
                <li className={styles.columnRow}>Contact us</li>
              </Link>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Connect with us</h4>
            <p>
              For support or questions: <br />
              Email us at <span className={styles.email}>info@kemtech.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <p>PTS HOLDINGS</p>
        <p>2022 © ALL RIGHTS RECEIVED</p>
      </div>
    </footer>
  );
}
