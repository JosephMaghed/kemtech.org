import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//page Components
import AboutCard from "components/Home/AboutCard";
import Hero from "components/Home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
    </>
  );
}
