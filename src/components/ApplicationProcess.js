import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

const ApplicationProcess = () => {
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
			<section
				className="container mx-auto rounded-2xl bg-blue-800 py-12 md:w-3/4 "
				data-aos="fade-up"
			>
				<h3
					className="mb-5 text-3xl font-bold text-white-basic"
					data-aos="fade-right"
					data-aos-delay={200}
				>
					Application Process
				</h3>
				<div className="flex flex-col gap-5 md:flex-row">
					{applicationProcessSteps.map((step, i) => (
						<div
							key={step.title}
							className="card w-full bg-yellow-basic drop-shadow-md"
							data-aos="fade-up"
							data-aos-delay={i * 100 + 200}
						>
							<div className="card-body flex flex-row items-center justify-start md:flex-col md:justify-center">
								<Image
									src={step.icon}
									alt={`${step.title} icon`}
									height={80}
									width={"100%"}
									data-aos="fade-up"
									data-aos-delay={i * 100 + 300}
								/>

								<h2 className="card-title mt-4 text-blue-basic">
									{step.title}
								</h2>
							</div>
						</div>
					))}
				</div>

				<div
					className="alert mt-4 shadow-lg"
					data-aos="zoom-in"
					data-aos-delay={400}
				>
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
							currently available, Please email us your details
							at:
							<span className="font-bold"> info@kemtech.org</span>
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default ApplicationProcess;
