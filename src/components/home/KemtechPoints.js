import Image from "next/image";
import Link from "next/link";

const KemtechPoints = () => {
	return (
		<section className="container overflow-hidden md:w-3/4">
			<div className="flex h-fit flex-col-reverse items-center justify-between rounded-2xl bg-[url('/imgs/backgrounds/painted-wooden-plank-textured-backdrop.png')] px-8 pb-8 text-white-basic md:h-[360px] md:flex-row md:p-8">
				<div className="text-center md:w-1/2 md:text-left">
					<div className="mb-4">
						<p className="text-xs">Join the waiting list</p>
						<h2 className="text-2xl font-extrabold">
							Participate now & win up to 50k points!
						</h2>
					</div>
					<p>
						Kemtech valley now offers a great opportunity for
						innovative ideas with providing tickets with value of
						5000 points to Entrepreneur and up to 50,000 to start
						ups!
					</p>
					<a
						href="https://forms.gle/rb8nkswD3QoNwqc28"
						target="_blank"
						rel="noreferrer"
					>
						<button className="btn-secondary btn-active btn mt-6">
							Join Now
						</button>
					</a>
				</div>

				<div className="relative  h-[350px] w-[350px] scale-150 lg:h-[450px] lg:w-[450px] ">
					<Image
						src="/imgs/assets/gift-of-tickets-with-points.svg"
						alt="gift of tickets with points"
						fill
						layout="fill"
					/>
				</div>
			</div>
		</section>
	);
};
export default KemtechPoints;
