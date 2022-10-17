import { SponsorTier } from "./SponsorTier";
import styles from "./SummitSponsors.module.sass";

export const SummitSponsors = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const PlatinumLogos = importAll(
    require.context(
      "assets/summitSponsors-platinum",
      false,
      /(png|jpe?g|svg|webp)/
    )
  );

  const goldenLogos = importAll(
    require.context(
      "assets/summitSponsors-golden",
      false,
      /\.(png|jpe?g|svg|webp)/
    )
  );

  const silverLogos = importAll(
    require.context(
      "assets/summitSponsors-silver",
      false,
      /(png|jpe?g|svg|webp)/
    )
  );

  return (
    <section className={styles.sponsorsContainer}>
      <h2 className="sectionTitle">Sponsors</h2>

      <SponsorTier title="Platinum Sponsors" logosObj={PlatinumLogos} />
      <SponsorTier title="Golden Sponsors" logosObj={goldenLogos} />
      <SponsorTier title="Silver Sponsors" logosObj={silverLogos} />
    </section>
  );
};
