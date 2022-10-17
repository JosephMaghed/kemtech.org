import Image from "next/image";
import styles from "./SummitSponsors.module.sass";
export const SponsorTier = ({ title = "No Title", logosObj }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.logosWrapper}>
        {Object.keys(logosObj).map(
          (x) =>
            // This implementation bypass the duplicated pictures caused by require.context
            // REVIEW: This solution requires more review
            x[0] !== "a" && (
              <div className={styles.imgContainer} key="x">
                <Image
                  src={logosObj[x].default}
                  alt="kemtech Summit 2022 Sponsor"
                  layout="responsive"
                  width={100}
                  height={50}
                />
              </div>
            )
        )}{" "}
      </div>
    </>
  );
};
