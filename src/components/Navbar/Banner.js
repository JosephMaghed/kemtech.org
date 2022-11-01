import xImg from "assets/x.svg";
import Image from "next/image";

//styles
import Link from "next/link";
import styles from "./Banner.module.sass";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        Get your special discount from <Link href="/kemtech-forum/registration">
          <span style={{
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>Here</span>
          </Link>
      </p>
    </div>
  );
};
