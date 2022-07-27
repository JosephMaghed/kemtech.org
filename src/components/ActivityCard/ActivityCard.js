import Button from "components/Button";

// Styles
import styles from "./ActivityCard.module.sass";

export const ActivityCard = (props) => {
  let { title, href, colors, buttonText } = props;

  //default color if color colors is not available
  if (colors === undefined) colors = ["#292C6B", "#0046AD"];

  //default button text
  if (buttonText === undefined) buttonText = "Learn More";

  return (
    <div
      className={styles.activityCardContainer}
      style={{
        background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 95.78%)`,
      }}
    >
      <h2>{title}</h2>
      <Button type="primary" innerText={buttonText} href={`${href}`} />
    </div>
  );
};
