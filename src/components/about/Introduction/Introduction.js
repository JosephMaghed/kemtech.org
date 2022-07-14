import Image from "next/image";

//styles
import styles from "./Introduction.module.sass";

// imgs
import kemtechTypoLogo from "assets/kemtech-typo.svg";
import holdingLogo from "assets/holding.svg";
import nctuLogo from "assets/nctu.png";
import shape from "assets/shape-yellow.svg";

export const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.logo}>
        <Image src={kemtechTypoLogo} alt="Kemtech logo" />
      </div>
      <p>
        The “Egyptian Applied Technological Valley- Kemtech Valley” initiative
        aims to build highly specialized technical cadres and develop the
        creative capabilities of Egyptian youth, as well as support start-ups,
        small and medium-sized companies in the field of applied technology and
        build digital community awareness through various programs.
        <br />
        The initiative was launched in cooperation between:
      </p>
      <div className={styles.columnsContainer}>
        <div>
          <p>
            New Cairo Technological University, one of the first Egyptian that
            is specialized in the development of technological and technical
            education in Egypt in parallel with the academic path with the
            quality and adequacy required by the labor market and achieving
            excellence, creativity and global leadership.
          </p>
          <Image src={nctuLogo} alt="New Cairo Technological University logo" />
        </div>
        <div>
          <p>
            PTS Group, an Egyptian group of companies that aims to add direct
            value in the investment value chain through its expertise and deep
            industries knowledge along with local and global partners building
            robust ecosystem to help businesses mainly entrepreneurs, startups
            and SMEs to build resilience, spur innovation, expedite growth and
            expand into key markets.
          </p>
          <Image src={holdingLogo} alt="PTS holding logo" />
        </div>
      </div>

      <div className={styles.shape}>
        <Image src={shape} alt="yellow blob" />
      </div>
    </section>
  );
};
