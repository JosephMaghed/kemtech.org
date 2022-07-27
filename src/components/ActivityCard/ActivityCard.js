import Button from "components/Button";

// Styles
import styles from "./ActivityCard.module.sass";

export const ActivityCard = (props) => {
  const { title, href, colors } = props;

  //default color if color colors is not available
  if (colors === undefined) colors = ["#292C6B", "#0046AD"];

  return (
    <div
      className={styles.activityCardContainer}
      style={{
        background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 95.78%)`,
      }}
    >
      <h2>{title}</h2>
      <Button type="primary" innerText="Learn More" href={`${href}`} />
    </div>
  );
};
