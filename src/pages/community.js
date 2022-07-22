import NotReady from "components/NotReady";
import pageArt from "assets/lunch-break-two-color.svg";
import Head from "next/head";

export default function community() {
  return (
    <>
      <Head>
        <title>Community - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NotReady img={pageArt}>
        <strong>Hello Kemtechians,</strong>
        <br /> Stay tuned we are building our amazing technovative community.
      </NotReady>
    </>
  );
}
