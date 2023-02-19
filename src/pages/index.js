import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";

//page Components
import ApplicationProcess from "components/ApplicationProcess";
import ContactForm from "components/ContactForm";
import AboutCard from "components/home/AboutCard";
import Hero from "components/home/Hero";
import ImagesCarousel from "components/home/ImagesCarousel";
import InitiativeGoals from "components/home/InitiativeGoals";
import InstaDeelCard from "components/home/InstaDeelCard";
import KemtechPoints from "components/home/KemtechPoints";
import OnGoingActivities from "components/home/OnGoingActivities";
import OurDomains from "components/home/OurDomains";
import StudioPrograms from "components/StudioPrograms";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kemtech Valley وادي التكنولوجيا المصري</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="The Egyptian Applied Technological Valley - “Kemtech Valley” initiative aims to build highly specialized technical cadres and develop the creative capabilities of Egyptian youth."
				/>
			</Head>

			<Hero />
			<KemtechPoints />
			<AboutCard />
			<StudioPrograms />
			<OurDomains />
			<ApplicationProcess />
			<ImagesCarousel />
			<InitiativeGoals />
			<div className="container mx-auto md:w-3/4">
				<ContactForm />
			</div>
		</>
	);
}
