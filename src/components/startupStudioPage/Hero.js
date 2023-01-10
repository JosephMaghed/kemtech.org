const { default: Image } = require("next/image");

const StartupStudioHero = () => {
	return (
		<section className="flex flex-wrap-reverse items-center justify-between overflow-hidden md:flex-nowrap md:overflow-visible">
			<div className="relative self-end  px-4 md:w-1/2 md:pl-16">
				<h1 className="sectionTitle " data-aos="fade-right">
					Startup# Studio
				</h1>
				<p data-aos="fade-right" data-aos-delay="300">
					Our Startup# Studio program is based on a venture studio
					model for entrepreneurship, whereas the valley adopts a
					one-stop shop approach for startups combining company
					building with venture funding either by generating new ideas
					for startups or by recruiting founders with ideas
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
						data-aos-duration="600"
						className="absolute -top-80 -left-32 -z-10 hidden h-[250px] w-[400px] bg-[#EDA122] blur-[100px] transition-all md:block"
					></div>
					<div
						data-aos="zoom-in"
						data-aos-delay="800"
						data-aos-duration="600"
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
		</section>
	);
};

export default StartupStudioHero;
