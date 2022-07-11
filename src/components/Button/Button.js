import Link from "next/link";
import { Fragment } from "react";
import styles from "./PrimaryButton.module.sass";

export default function Button(props) {
  return (
    <Fragment>
      <Link href={props.link || "#"}>
        <div
          className={
            props.type === "primary"
              ? styles.primaryButton
              : styles.SecondaryButton
          }
        >
          <p>{props.innerText}</p>
        </div>
      </Link>
    </Fragment>
  );
}
