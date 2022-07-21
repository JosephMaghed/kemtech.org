import FoundersWord from "components/about/FoundersWord";
import Introduction from "components/about/Introduction";
import KemtechArt from "components/about/KemtechArt";
import ContactForm from "components/ContactForm";
import Head from "next/head";
export default function about() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Introduction />
      <KemtechArt />
      <FoundersWord />
      <ContactForm />
    </>
  );
}
