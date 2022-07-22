import NotReady from "components/NotReady";
import PageArt from "assets/bad-idea-pana.svg";
import Head from "next/head";
export default function careers() {
  return (
    <>
      <Head>
        <title>Careers - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NotReady img={PageArt}>
        There is no positions available right now ! You can send your resume at:
        <strong> careers@ptscorp-eg.com</strong>
      </NotReady>
    </>
  );
}
