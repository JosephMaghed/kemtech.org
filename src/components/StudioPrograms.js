import Image from "next/image";

//img
import kemetaLogo from "assets/kemeta.svg";
import kemtizeLogo from "assets/kemtize.svg";
import kemtronixLogo from "assets/kemtronix.svg";

const StudioPrograms = () => {
	const Accelerators = [
		{
			img: kemtizeLogo,
			alt: "kemtize logo",
			description:
				"Mainly focus on Digitalization Platforms industry wide that support improving world living standards e.g. Health-tech, Edu-tech, Fin-tech, etc...",
		},
		{
			img: kemtronixLogo,
			alt: "kemtronix logo",
			description:
				"Mainly focus on applied technologies/ Advanced Technological Industries that requires manufacturing production lines e.g. Agri-tech, mining-tech, etc...",
		},
		{
			img: kemetaLogo,
			alt: "kemeta logo",
			description:
				"Mainly focus on disruptive technologies that introduce an entirely new business model and a new growth market e.g. metaverse, Blockchain, etc...",
		},
	];

	return (
		<section className="container mx-auto lg:w-3/4">
			<h2 className="sectionTitle" data-aos="fade-right">
				Studio Programs
			</h2>
			<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
				{Accelerators.map((x, i) => (
					<div
						key={x.alt.replace(" ", "-")}
						className="card w-full bg-base-100 shadow-md"
						data-aos="fade-right"
						data-aos-delay={i * 100 + 100}
					>
						<div className="card-body">
							<Image
								src={x.img}
								alt={x.alt}
								height={35}
								width={"100%"}
							/>
							<p className="mt-3">{x.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default StudioPrograms;
