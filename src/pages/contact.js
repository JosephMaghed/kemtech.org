import ContactForm from "components/ContactForm";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactForm />;
    </>
  );
}
