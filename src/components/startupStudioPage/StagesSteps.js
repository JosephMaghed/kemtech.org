import { useState } from "react";

const StagesSteps = () => {
	// Track the current tab in Stages steps
	let [activeStepValue, setActiveStepValue] = useState(0);

	// Startup studio program stages
	let programStages = [
		{
			name: "5 Days Intro",
			description: [
				`Don't Feel Like You're Behind Your Peers,`,
				<br key={"0101"} />,
				`For students who
					want to join the ecosystem without much business knowledge,
					We have designed a 5-day crash course for you.`,
				<br key={"0102"} />,
				`At the end of
					the course, there will be a pitching day, where qualified
					projects will win a free seat in the launchpad program`,
			],
		},
		{
			name: "Startup Launchpad",
			description: [
				<strong key={"0200"}>Are you ready to go advance?</strong>,
				<br key={"0103"} />,
				`For those who need to unlock their capabilities and develop
				their mindset to adapt to future changes in the ecosystem,
				We offer you Start-up Launchpad Program that includes 7 modules that'll
				help you develop your technical and soft skills and learn more about
				entrepreneurship world.`,
			],
		},
		{
			name: "Startup Factory",
			description: [
				<strong key={"0201"}>
					FROM VENTURE IDEA TO VENTURE OPPORTUNITY
				</strong>,
				<br key={"0104"} />,
				`We aim to support Tech-based Seed & Pre-Seed Startups
				throughout our integrated in-kind services`,
			],
		},
		{
			name: "Fund Raising",
			description: `The opportunity to present your start-up to Investors,
			There will be exposure to VCs, Angle Networks, and Investors`,
		},
		{
			name: "Exit",
			description: `Exit to unlock their capabilities and
			develop their mindset to adapt to future changes in
			the ecosystem,`,
		},
	];

	return (
		<>
			<section className=" flex  w-full flex-col justify-start md:mx-auto md:w-3/4 md:justify-center">
				<h2 className="subtitle px-4 md:px-0" data-aos="fade-right">
					Program Stages
				</h2>
				<p
					className="px-4 font-thin text-slate-600"
					data-aos="fade-right"
					data-aos-delay="100"
				>
					We are always there from your very first steps
				</p>
				<ul
					className="steps mt-10 mb-5 w-full px-2 md:mx-auto md:w-3/4"
					data-aos="fade-up"
					data-aos-delay={300}
				>
					{programStages.map((stage, i) => (
						<li
							key={i}
							onClick={(e) => setActiveStepValue(i)}
							className={`step cursor-pointer whitespace-pre-line text-xs md:text-base
							${i <= activeStepValue && "step-primary"}`}
						>
							{stage.name}
						</li>
					))}
				</ul>

				<div data-aos="fade-up" data-aos-delay="300">
					{programStages.map((stage, i) => (
						<div
							key={stage.name + i}
							className={
								i !== activeStepValue
									? "hidden"
									: "animate-fadeIn-right"
							}
						>
							<p className="mt-6 mb-2 text-center text-xl font-bold text-blue-basic">
								{stage.name}
							</p>
							<p className="container text-center">
								{stage.description}
							</p>
						</div>
					))}
				</div>

				{/*--------------- Stages Cards --------------- */}
				<div className="mt-10 flex w-full flex-col lg:flex-row">
					<div
						className="card w-full bg-base-100 drop-shadow-md"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="card-body">
							<h2 className="card-title text-blue-basic">
								5 Days Introduction
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>

					<div
						className="divider p-6 lg:divider-horizontal"
						data-aos="fade-up"
						data-aos-delay="250"
					></div>

					<div
						className="card w-full bg-base-100 drop-shadow-md"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="card-body">
							<h2 className="card-title text-blue-basic">
								Startup Launchpad
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>

					<div
						className="divider p-6 lg:divider-horizontal"
						data-aos="fade-up"
						data-aos-delay="350"
					></div>

					<div
						className="card w-full bg-base-100 drop-shadow-md"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<div className="card-body">
							<h2 className="card-title text-blue-basic">
								Startup Factory
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default StagesSteps;
