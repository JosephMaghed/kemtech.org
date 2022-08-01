import NotReady from "components/NotReady";
import pageArt from "assets/paid-idea-cuate.svg";
import Head from "next/head";
import ContactForm from "components/ContactForm";
import oroLogo from "assets/oro-black.svg";
import Image from "next/image";

export default function community() {
  return (
    <>
      <Head>
        <title>Partners - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NotReady img={pageArt}>
        <h1 className="sectionTitle">Our partners</h1>
        <Image src={oroLogo} alt="oro ventures logo" height={100} width={200} />
        <br />
        <br />
        <br />
        <strong>Join Us</strong>
        <br /> Become one of the first technovative Partners in Egypt.
        <br /> For inquires contact us using the form below or email us at:{" "}
        <br /> <strong>info@kemtech.org</strong>
      </NotReady>

      <ContactForm />
    </>
  );
}
