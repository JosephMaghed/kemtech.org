import Link from "next/link";
import { Fragment } from "react";
import styles from "./PrimaryButton.module.sass";

export default function Button(props) {
  return (
    <Fragment>
      <Link href={props.href || "#"}>
        <div
          className={
            props.type === "primary"
              ? styles.primaryButton
              : props.type === "secondary-white"
              ? styles.SecondaryButton_white
              : styles.SecondaryButton_black
          }
        >
          <div>{props.innerText}</div>
        </div>
      </Link>
    </Fragment>
  );
}
