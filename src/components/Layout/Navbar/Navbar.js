import Image from "next/image";
import Link from "next/link";
import logo from "assets/kemtech_full_white.svg";
import Button from "components/Button";
import styles from "./Navbar.module.sass";

export default function Navbar() {
  let navLinks = [
    { pageName: "About kemtech", pageLink: "/about" },
    { pageName: "Initiative programs", pageLink: "/programs" },
    { pageName: "Community", pageLink: "/community" },
    { pageName: "Careers", pageLink: "/careers" },
    { pageName: "Partners", pageLink: "/partners" },
  ];

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          className={styles.logo}
          src={logo}
          width={100}
          height={100}
          alt="Kemtech logo"
        />
      </Link>
      <div className={styles.navContainer}>
        {navLinks.map((navLink) => (
          <div key={navLink.pageLink} className={styles.navItem}>
            <Link href={navLink.pageLink}>{navLink.pageName}</Link>
          </div>
        ))}
      </div>
      <div className={styles.applyButton}>
        <Button innerText="Apply now" type="primary" />
      </div>
    </nav>
  );
}
