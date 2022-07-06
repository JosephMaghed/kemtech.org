import Link from "next/link";
import { Fragment } from "react";
import styles from "./PrimaryButton.module.sass";

export default function PrimaryButton(props) {
  return (
    <Fragment>
      <Link href={"#"}>
        <div className={styles.primaryButton}>
          <p>{props.innerText}</p>
        </div>
      </Link>
    </Fragment>
  );
}
