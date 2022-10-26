import {
  faBug,
  faCircleCheck,
  faMugHot
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ticket from "components/summit-page/Ticket";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


import styles from "styles/TicketPage.module.sass";

//Get ticket data from server
export const getServerSideProps = async (context) => {
  const { query } = context;
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(
      `${API_URL}/api/summit-tickets/ticket/${query.ticketId}`
    );

    // parse request body
    const data = await res.json();

    return { props: { ticketData: data, resStatus: res.status } };
  } catch (err) {
    console.log(err);
    return {
      props: { ticketData: null, resStatus: 500 },
    };
  }
};

export default function TicketPage({ ticketData, resStatus }) {


  // reference to ticket component for generating img
  const printRef = useRef();

  // Image Data
  const [ticketImg, setTicketImg] = useState(null);

  // Generate ticket img using the hidden ticket component
  const generateImage = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element, { backgroundColor: null });

    const data = canvas.toDataURL("image/png");
    setTicketImg(data);
  };

  // Download Ticket
  const handleDownloadImage = () => {
    saveAs(
      ticketImg,
      `${ticketData.firstName}'s Ticket | Kemtech Summit 2022 .png`
    );
  };

  // Generate img on page load
  useEffect(() => {
    generateImage();
  });

  //Find if ticket is for a PTS user
  const isPTSCrew = (email) => {
    let domain = email.split("@")[1];
    return domain === "ptscorp-eg.com";
  };

  return (
    <div className={styles.pageContainer}>

      <Head>
        <title>{`${ticketData.firstName}'s Ticket | Kemtech Summit 2022`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*========== If Ticket is not registered ==========*/}
      {resStatus === 404 && <div>Not Found</div>}

      {/* ========If server is not responding ==========*/}
      {resStatus !== 404 && resStatus !== 200 && <div>Server Error</div>}

      {/*==========If Ticket is not registered========== */}
      {resStatus === 200 && (
        <div className={styles.successContainer}>
          <div className={styles.header}>
            {isPTSCrew(ticketData.email) ? (
              // Different message for PTS team
              <div className={styles.ptsMessage}>
                <h2>
                  Hey {ticketData.firstName}, <br />
                  <br />
                  You are a PTS family member.  You don&apos;t need a ticket to enter.
                  <br />
                  But anyways, here you go ✌️
                  <br />
                  <br />
                  Keep Rocking! 😉
                </h2>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ fontSize: 60, color: "#f7a41c" }}
                />
                <h2>Registration completed successfully</h2>
              </div>
            )}
          </div>

          <div ref={printRef} className={styles.ticketWrapper}>
            <Ticket
              name={`${ticketData.firstName} ${ticketData.middleName} ${ticketData.lastName}`}
              email={ticketData.email}
            />
          </div>

          {ticketImg && (
            <div className={styles.ticketImgContainer}>
              <Image alt="" src={ticketImg} width={1280} height={462} />
            </div>
          )}

          <button type="button" onClick={handleDownloadImage}>
            Download Ticket
          </button>
        </div>
      )}
    </div>
  );
}
