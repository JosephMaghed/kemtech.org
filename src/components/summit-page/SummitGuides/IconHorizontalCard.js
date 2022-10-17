import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./SummitGuides.module.sass";

import { faFile } from "@fortawesome/free-solid-svg-icons";

export const IconHorizontalCard = ({
  title,
  fileType,
  icon = faFile,
  file,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const saveFile = () => {
    setIsDownloading(true);

    saveAs(file, `Kemtech ${title}.pdf`);

    toast.success("Download Started... ", {
      position: toast.POSITION.TOP_Right,
    });

    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.topWrapper}>
          <FontAwesomeIcon
            icon={icon}
            style={{ fontSize: 40, color: "#f7a41c" }}
          />

          <div>
            <p>{title}</p>
            <small>{fileType}</small>
          </div>
        </div>

        <button
          disabled={isDownloading}
          className={isDownloading ? styles.button__disabled : styles.button}
          onClick={saveFile}
        >
          Download
        </button>
      </div>
    </div>
  );
};
