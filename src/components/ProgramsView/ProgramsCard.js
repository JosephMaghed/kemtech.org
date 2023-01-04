import Image from "next/image";
import Link from "next/link";

export const ProgramCard = (props) => {
	let { name, img, href } = props;

	return (
		<div className="card w-96 rounded-3xl bg-base-100 shadow-md ring-1 transition-all hover:scale-x-105 hover:shadow-2xl">
			<div className="card-body items-center justify-center">
				<div>
					<Image src={img} alt={name} width={200} height={200} />
				</div>
				<p className="my-2 text-lg font-medium">{name}</p>
				<Link href={`/programs/${href}`}>
					<button className="btn-outline btn-primary btn">
						Learn More
					</button>
				</Link>
			</div>
		</div>
	);
};
