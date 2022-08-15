import ContactForm from "components/ContactForm";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Kemtech Valley, NCT university, Main building, El lotus compound, 5th settlement, New Cairo, Egypt."
        />
      </Head>
      <ContactForm />;
    </>
  );
}
