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
import InstaDeelCard from "components/InstaDeelCard";
import ProgramsView from "components/ProgramsView";

//Carousel pics

export default function Home() {
  return (
    <>
      <Head>
        <title>Kemtech Valley وادي التكنولوجيا المصري</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The Egyptian Applied Technological Valley - “Kemtech Valley” initiative aims to build highly specialized technical cadres and develop the creative capabilities of Egyptian youth."
        />
      </Head>

      <Hero />
      <div className={styles.InsatdeelContainer}>
        <InstaDeelCard href="/kemtech-forum" buttonText="Register Now"/>
      </div>
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
