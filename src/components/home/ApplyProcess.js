import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

const ApplyProcess = () => {
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
			<ScrollAnimate path={"top"}>
				<section className="container mx-auto rounded-2xl bg-blue-800 py-12 md:w-3/4">
					<h3 className="mb-5 text-3xl font-bold text-white-basic">
						Application Process
					</h3>
					<div className="flex flex-col gap-5 md:flex-row">
						{applicationProcessSteps.map((step) => (
							<div
								key={step.title}
								className="card w-full bg-yellow-basic drop-shadow-md"
							>
								<div className="card-body flex flex-row items-center justify-start p-6 md:flex-col md:justify-center">
									<Image
										src={step.icon}
										alt={`${step.title} icon`}
										height={70}
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
				</section>
			</ScrollAnimate>
		</>
	);
};

export default ApplyProcess;
