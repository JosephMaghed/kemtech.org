import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import { useRouter } from "next/router";
import { useState } from "react";

//styles
import styles from "./Navbar.module.sass";

//imgs
import logo from "assets/kemtech_full_white.svg";
import hamburgerMenu from "assets/menu-icon.svg";
import xIcon from "assets/x.svg";

export default function Navbar() {
  // Current page
  const router = useRouter();
  const currentPage = router.pathname;

  //responsive nav toggle handler
  const [isToggled, setToggled] = useState(false);

  const navToggleHandler = (isToggleBoolean) => {
    // Change state to the nav toggle
    setToggled(() => isToggleBoolean, [isToggled, setToggled]);

    console.log(`parameter: ${isToggleBoolean}`);
    console.log(`state: ${isToggled}`);

    // Turn off scroll when toggled
    !isToggled
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  // Data to Generate nav links
  let navLinks = [
    { pageName: "About kemtech", pageLink: "/about" },
    { pageName: "Initiative programs", pageLink: "/programs" },
    { pageName: "Community", pageLink: "/community" },
    { pageName: "Careers", pageLink: "/careers" },
    { pageName: "Partners", pageLink: "/partners" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={isToggled ? styles.navWarperActive : styles.navWarper}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logo}
            width={100}
            height={100}
            alt="Kemtech logo"
            onClick={() => navToggleHandler(false)}
          />
        </Link>
        <div className={styles.navItemContainer}>
          {navLinks.map((navLink) => (
            <div
              key={navLink.pageLink}
              className={
                currentPage === navLink.pageLink
                  ? styles.navItemActive
                  : styles.navItem
              }
              onClick={() => navToggleHandler(false)}
            >
              <Link href={navLink.pageLink}>{navLink.pageName}</Link>
            </div>
          ))}
        </div>
        <div className={styles.applyButton}>
          <Button innerText="Apply now" type="primary" />
        </div>
        <div className={styles.xToggle} onClick={() => navToggleHandler(false)}>
          <Image src={xIcon} alt="" height={50} />
        </div>
      </div>

      <div className={styles.menuToggle} onClick={() => navToggleHandler(true)}>
        <Image src={hamburgerMenu} alt="" height={30} width={40} />
      </div>
    </nav>
  );
}
