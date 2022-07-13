import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//page Components
import AboutCard from "components/Home/AboutCard";
import Hero from "components/Home/Hero";
import Accelerators from "components/Home/Accelerators";
import OurDomains from "components/Home/OurDomains";
import ApplyProcess from "components/Home/ApplyProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <Accelerators />
      <OurDomains />
      <ApplyProcess />
    </>
  );
}
