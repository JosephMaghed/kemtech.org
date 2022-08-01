import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";

//page Components
import ContactForm from "components/ContactForm";
import AboutCard from "components/home/AboutCard";
import Accelerators from "components/home/Accelerators";
import ApplyProcess from "components/home/ApplyProcess";
import Hero from "components/home/Hero";
import ImagesCarousel from "components/home/ImagesCarousel";
import InitiativeGoals from "components/home/InitiativeGoals";
import OnGoingActivities from "components/home/OnGoingActivities";
import OurDomains from "components/home/OurDomains";
import ProgramsView from "components/ProgramsView";

//Carousel pics

export default function Home() {
  return (
    <>
      <Head>
        <title>Kemtech Valley وادي التكنولوجيا المصري</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <AboutCard />
      <Accelerators />
      <OurDomains />
      <ApplyProcess />
      {/* <ProgramsView /> */}
      <ImagesCarousel />
      <OnGoingActivities />

      <InitiativeGoals />
      <ContactForm />
    </>
  );
}
