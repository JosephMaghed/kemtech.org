import NotReady from "components/NotReady";
import pageArt from "assets/paid-idea-cuate.svg";
import Head from "next/head";
import ContactForm from "components/ContactForm";

export default function community() {
  return (
    <>
      <Head>
        <title>Partners - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NotReady img={pageArt}>
        <strong>Join Us</strong>
        <br /> Become one of the first technovative Partners in Egypt. For
        inquires contact us using the form below or email us at: <br />{" "}
        <strong>info@kemtech.com</strong>
      </NotReady>

      <ContactForm />
    </>
  );
}
