import Button from "components/Button";
import styles from "./summitLocation.module.sass";

import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Location() {
  return (
    <section className={styles.locationContainer}>
      <h2 className="summitTitle">Location</h2>
      <div className={styles.flexContainer}>
        <div className={styles.title}>
          <div className={styles.text}>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{ fontSize: 40, color: "#f7a41c" }}
            />
            <span>
              New Cairo Technological University 90 st. The 5th Settlement,
              Cairo, Egypt
            </span>
          </div>
          <div>
            <Button
              className={styles.button}
              href="https://goo.gl/maps/XTcUFm1KyvkjNJdu7"
              innerText="View on map"
              type="primary"
            />
          </div>
        </div>

        {/* ==== Google maps iframe */}

        <div className={styles.mapWrapper}>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=667&height=329&hl=en&q=New Cairo Technological University&t=&z=13&ie=UTF8&iwloc=B&output=embed"
              />
              <a href="https://piratebay-proxys.com/">Piratebay</a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;width:100%;height:329px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:329px;}.gmap_iframe {height:329px!important;}",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
