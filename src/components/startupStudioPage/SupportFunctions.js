import Image from "next/image";

const SupportFunctions = () => {
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

	return (
		<section className="container text-center">
			<p className=" font-semibold text-blue-basic" data-aos="fade-down">
				{"What's in the box?"}
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
		</section>
	);
};
export default SupportFunctions;
