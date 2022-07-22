import Image from "next/image";

// import styles
import styles from "./NotReady.module.sass";

// import img
import instagramLogo from "assets/instagram-color.svg";
import facebookLogo from "assets/facebook-color.svg";
import LinkedinLogo from "assets/linkedin-color.svg";
import Link from "next/link";

export const NotReady = ({ children, ...props }) => {
  const socialLinks = [
    {
      name: "Instagram",
      img: instagramLogo,
      link: "https://instagram.com/kemtechian",
    },
    {
      name: "Facebook",
      img: facebookLogo,
      link: "https://www.facebook.com/Kemtechian",
    },
    {
      name: "Linkedin",
      img: LinkedinLogo,
      link: "https://www.linkedin.com/company/kemtech-valley/",
    },
  ];

  return (
    <section className={styles.notReadyContainer}>
      <div className={styles.imgContainer}>
        <Image src={props.img} alt="" />
      </div>
      <div className={styles.textContainer}>
        <p>
          {children}
          <br />
          Meanwhile, you could follow us on our social channels to keep posted
          with the latest news.
        </p>
      </div>
      <div className={styles.socialContainer}>
        <h1>Follow Us</h1>
        {socialLinks.map((x) => (
          <div key={x.name}>
            <a href={x.link} target="_blank" rel="noopener noreferrer">
              <Image src={x.img} alt={x.name} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
