import ApplicationProcess from "components/ApplicationProcess";
import ContactForm from "components/ContactForm";
import FAQ from "components/startupStudioPage/FAQ";
import StartupStudioHero from "components/startupStudioPage/Hero";
import Overview from "components/startupStudioPage/Overview";
import StageQuiz from "components/startupStudioPage/StageQuiz";
import StagesSteps from "components/startupStudioPage/StagesSteps";
import SupportFunctions from "components/startupStudioPage/SupportFunctions";
import StudioPrograms from "components/StudioPrograms";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ScrollAnimate from "react-scroll-fade-animation";

export default function StartupStudioProgram() {
	return (
		<>
			<Head>
				<title>{"Startup# Studio Kemtech"}</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			{/*------------ Hero Section --------------*/}
			<StartupStudioHero />

			{/*
				Didn't add a global width container here
				to squeeze in small width margin for the Stages steps section
				as it's pretty long for mobile views
			*/}
			<div className="my-14 space-y-28">
				{/*--------------- Overview--------------- */}
				<Overview />

				{/*-------------- Supports Areas --------------- */}
				<SupportFunctions />

				{/*--------------- Program Stages --------------- */}
				<StagesSteps />

				{/*--------------- Stage Quiz --------------- */}
				{/* <StageQuiz /> */}

				{/*--------------- Application Process --------------- */}
				<ApplicationProcess />

				{/*--------------- Studio Programs --------------- */}
				<StudioPrograms />

				{/*--------------- FAQ --------------- */}
				{/* <FAQ /> */}

				{/*--------------- Contact --------------- */}
				<div className="container mx-auto md:w-3/4">
					<ContactForm />
				</div>
			</div>
		</>
	);
}
