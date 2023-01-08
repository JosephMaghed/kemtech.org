import { useState } from "react";

const StagesSteps = () => {
	// Track the current tab in Stages steps
	let [stageStepValue, setStageStepValue] = useState(0);

	// Startup studio program stages
	let programStages = [
		{
			name: "5 Days Intro",
			description: [
				`Don't Feel Like You're Behind Your Peers,`,
				<br key={"brb"} />,
				`For students who
					want to join the ecosystem without much business knowledge,
					We have designed a 5-day crash course for you.`,
				<br key={"brb"} />,
				`At the end of
					the course, there will be a pitching day, where qualified
					projects will win a free seat in the launchpad program`,
			],
		},
		{
			name: "Startup Launchpad",
			description: `Startup Launchpad to unlock their capabilities and
			develop their mindset to adapt to future changes in
			the ecosystem, we offer you Start-up Launchpad
			Program that includes 7 modules that&apos;ll help
			you develop your technical and soft skills and learn
			more about entrepreneurship world, we offer you
			Start-up Launchpad Program that includes 7 modules
			that&apos;ll help you develop your technical and
			soft skills and learn more about entrepreneurship
			world`,
		},
		{
			name: "Startup Factory",
			description: `Startup Factory to unlock their capabilities and
			develop their mindset to adapt to future changes in
			the ecosystem, we offer you Start-up Launchpad
			Program that includes 7 modules that&apos;ll help
			you develop your technical and soft skills and learn
			more about entrepreneurship world, we offer you
			Start-up Launchpad Program that includes 7 modules
			that&apos;ll help you develop your technical and
			soft skills and learn more about entrepreneurship
			world`,
		},
		{
			name: "Fund Raising",
			description: `Fund Raising unlock their capabilities and
			develop their mindset to adapt to future changes in
			the ecosystem, we offer you Start-up Launchpad
			Program that includes 7 modules that&apos;ll help
			you develop your technical and soft skills and learn
			more about entrepreneurship world, we offer you
			Start-up Launchpad Program that includes 7 modules
			that&apos;ll help you develop your technical and
			soft skills and learn more about entrepreneurship
			world`,
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
			<div className="flex w-full  flex-col justify-start md:mx-auto md:w-3/4 md:justify-center">
				<h2 className="subtitle px-4 md:px-0">Program Stages</h2>
				<p className="px-4 font-thin text-slate-600">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy
				</p>
				<ul className="steps mt-10  mb-5 w-full px-2 md:mx-auto md:w-3/4">
					{programStages.map((stage, i) => (
						<li
							key={i}
							onClick={() => setStageStepValue(i)}
							className={`step cursor-pointer whitespace-pre-line text-xs md:text-base
                    ${i <= stageStepValue && "step-primary"}`}
						>
							{stage.name}
						</li>
					))}
				</ul>
				<p className="mt-6 mb-2 text-center text-xl font-bold text-blue-basic">
					{programStages[stageStepValue].name}
				</p>
				<p
					className="container"
					data-aos="fade-right"
					data-aos-delay="200"
				>
					{programStages[stageStepValue].description}
				</p>

				{/* <div className="container my-4">
                <Image
                    src={"/imgs/students1.jpg"}
                    alt="Round 1 teams successfully completes Startup Launchpad"
                    width={"2028"}
                    height={"1078"}
                    objectFit="fill"
                    className="scale-100 rounded-xl md:scale-90"
                />
            </div> */}
				{/*--------------- Stages Cards --------------- */}
				<div className="mt-10 flex w-full flex-col lg:flex-row">
					<div className="card w-full bg-base-100 drop-shadow-md">
						<div className="card-body">
							<h2 className="card-title text-blue-basic">
								5 Days Introduction
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>

					<div className="divider p-6 lg:divider-horizontal"></div>

					<div className="card w-full bg-base-100 drop-shadow-md">
						<div className="card-body">
							<h2 className="card-title text-blue-basic">
								Startup Launchpad
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>

					<div className="divider p-6 lg:divider-horizontal"></div>

					<div className="card w-full bg-base-100 drop-shadow-md">
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
			</div>
		</>
	);
};
export default StagesSteps;
