import Head from "next/head";
import Image from "next/image";

import styles from "styles/Partners.module.sass";

export default function Partners() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const imagesArr = importAll(
    require.context("assets/partnersLogos", false, /\.(png|jpe?g|svg|webp)$/)
  );

  return (
    <>
      <Head>
        <title>Partners - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className={styles.container}>
        {Object.keys(imagesArr).map(
          (x) =>
            // This implementation bypass the duplicated pictures caused by require.context
            // REVIEW: This solution requires more review
            x[0] === "p" && (
              <div className={styles.imgContainer} key="x">
                <Image src={imagesArr[x].default} alt="kemtech partner" />
              </div>
            )
        )}
      </section>
    </>
  );
}
