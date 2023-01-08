import ContactForm from "components/ContactForm";
import StageQuiz from "components/startupStudio/StageQuiz";
import StagesSteps from "components/startupStudio/StagesSteps";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ScrollAnimate from "react-scroll-fade-animation";

export default function StartupStudioProgram() {
	let servicesProvided = [
		{
			icon: "/imgs/icons/dollar-icon.svg",
			title: "finance",
		},
		{
			icon: "/imgs/icons/promotion-icon.svg",
			title: "Marketing",
		},
		{
			icon: "/imgs/icons/code-icon.svg",
			title: "IT",
		},
		{
			icon: "/imgs/icons/pentool-icon.svg",
			title: "Design",
		},
		{
			icon: "/imgs/icons/shield-icon.svg",
			title: "Legal",
		},
		{
			icon: "/imgs/icons/eng-icon.svg",
			title: "Engineering",
		},
		{
			icon: "/imgs/icons/swipe-icon.svg",
			title: "Operations",
		},
		{
			icon: "/imgs/icons/person-icon.svg",
			title: "HR",
		},
	];

	//Application process
	let applicationProcessSteps = [
		{ title: "Apply Online", icon: "/imgs/icons/doc-icon.svg" },
		{
			title: "Get Interviewed",
			icon: "/imgs/icons/chat-question-icon.svg",
		},
		{
			title: "Pitch Idea",
			icon: "/imgs/icons/presentation-icon.svg",
		},
		{
			title: "Start Growing",
			icon: "/imgs/icons/money-grow-icon.svg",
		},
	];

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
			<div className="flex flex-wrap-reverse items-center justify-between overflow-hidden md:flex-nowrap md:overflow-visible">
				<div className="relative self-end  px-4 md:w-1/2 md:pl-16">
					<h1 className="sectionTitle " data-aos="fade-right">
						Startup# Studio
					</h1>
					<p data-aos="fade-right" data-aos-delay="300">
						Our Startup# Studio program is based on a venture studio
						model for entrepreneurship, whereas the valley adopts a
						one-stop shop approach for startups combining company
						building with venture funding either by generating new
						ideas for startups or by recruiting founders with ideas
					</p>

					<div
						className="mt-8"
						data-aos="fade-right"
						data-aos-delay="300"
					>
						<p className="ml-4 font-semibold uppercase text-slate-500">
							Powered By
						</p>
						<div className="mt-2 h-fit  w-36">
							<Image
								src={"/imgs/logos/oro-black.svg"}
								alt=""
								width={"100%"}
								height={"50%"}
								layout="responsive"
								objectFit="contain"
							/>
						</div>
					</div>

					{/* Blurred BG */}
					<div className="opacity-50">
						{/* Added opacity to a div container to overwrite AOS opacity classes */}
						<div
							data-aos="zoom-in"
							data-aos-delay="900"
							className="absolute -top-80 -left-32 -z-10 hidden h-[250px] w-[400px] bg-[#EDA122] blur-[100px] transition-all md:block"
						></div>
						<div
							data-aos="zoom-in"
							data-aos-delay="800"
							className="absolute top-0 -right-72 -z-10 h-[250px] w-[250px] bg-[#EDA122] opacity-40 blur-[100px] md:bg-[#0046AD]"
						></div>
					</div>
				</div>
				<div className="ml-8 mb-4 h-full self-start md:w-1/2 ">
					<Image
						data-aos="fade-left"
						src={"/imgs/disk-with-laptops.webp"}
						alt=""
						width={"6000"}
						height={"4000"}
						objectFit="fill"
						className="rounded-bl-[273px]"
					/>
				</div>
			</div>

			{/*
				Didn't add a global width container here
				to squeeze in small width margin for the Stages steps section
				as it's pretty long for mobile views
			*/}
			<div className="my-14 space-y-28">
				{/*--------------- Overview--------------- */}
				<div className="container text-center">
					<h2
						data-aos="fade-up"
						className="mb-2 text-3xl font-black text-blue-400 md:mb-8 md:text-5xl"
					>
						Empowering Technovation
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="200"
						className="mx-auto md:w-3/4"
					>
						We empower innovation in technology & support
						entrepreneurs by investing in and mentoring them. We
						provide you with valuable opportunities to develop your
						solutions, develop your brands, and promote innovative
						products. We encourage the development of innovative
						products and services by enabling and supporting who are
						inspired and committed to achieve this goal & ensures a
						positive change in the world
					</p>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="divider mx-auto w-1/2 md:w-1/4"
					></div>
				</div>

				{/*-------------- Supports Areas --------------- */}
				<div className="container text-center">
					<p
						className=" font-semibold text-blue-basic"
						data-aos="fade-down"
					>
						What's in the box?
					</p>
					<p
						className="subtitle text-black-basic"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						Your tools to build the next{" "}
						<span className="bg-yellow-basic px-1 font-black text-[#ffff]">
							UNICORN
						</span>{" "}
						startup
					</p>
					<div className="mx-auto mt-6 grid grid-cols-3 gap-3 md:w-1/2 md:grid-cols-4">
						{servicesProvided.map((service, i) => (
							<div
								key={service.title}
								className="mx-auto mt-2 w-fit items-center"
								data-aos="fade-right"
								data-aos-delay={i * 100 + 100}
							>
								<Image
									src={service.icon}
									alt={`${service.title} Icon`}
									width={100}
									height={100}
								/>
								<p className="font-medium">{service.title}</p>
							</div>
						))}
					</div>
				</div>

				{/*--------------- Program Stages --------------- */}
				<StagesSteps />
				{/*--------------- Stage Quiz --------------- */}
				{/* <StageQuiz /> */}

				{/*--------------- Application Process --------------- */}
				<div className="container mx-auto rounded-2xl bg-blue-800 py-12 md:w-3/4">
					<h3 className="mb-5 text-3xl font-bold text-white-basic">
						Application Process
					</h3>
					<div className="flex flex-col gap-5 md:flex-row">
						{applicationProcessSteps.map((step) => (
							<div
								key={step.title}
								className="card w-full bg-yellow-basic drop-shadow-md"
							>
								<div className="card-body flex flex-row items-center justify-start md:flex-col md:justify-center">
									<Image
										src={step.icon}
										alt={`${step.title} icon`}
										height={80}
										width={"100%"}
									/>

									<h2 className="card-title mt-4 text-blue-basic">
										{step.title}
									</h2>
								</div>
							</div>
						))}
					</div>

					<div className="alert mt-4 shadow-lg">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="h-6 w-6 flex-shrink-0 stroke-info"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>
								Unfortunately, Our online application is not
								currently available, Please email us your
								details at:
								<span className="font-bold">
									{" "}
									info@kemtech.org
								</span>
							</span>
						</div>
					</div>
				</div>

				{/*--------------- FAQ --------------- */}
				<div className="container mx-auto md:w-3/4">
					<h2 className="subtitle">FAQ</h2>

					<div className="mt-8 w-full md:w-1/2">
						<div
							tabIndex={0}
							className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100"
						>
							<div className="collapse-title text-xl font-medium">
								Focus me to see content
							</div>
							<div className="collapse-content">
								<p>
									tabIndex={0} attribute is necessary to make
									the div focusable
								</p>
							</div>
						</div>
					</div>
				</div>

				{/*--------------- Contact --------------- */}
				<div className="container mx-auto md:w-3/4">
					<ContactForm />
				</div>
			</div>
		</>
	);
}
