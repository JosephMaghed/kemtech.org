import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//page Components
import AboutCard from "components/home/AboutCard";
import Hero from "components/home/Hero";
import Accelerators from "components/home/Accelerators";
import OurDomains from "components/home/OurDomains";
import ApplyProcess from "components/home/ApplyProcess";
import InitiativeGoals from "components/home/InitiativeGoals";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <Accelerators />
      <OurDomains />
      <ApplyProcess />
      <InitiativeGoals />
    </>
  );
}
