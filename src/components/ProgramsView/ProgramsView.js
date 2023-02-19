import { programsData } from "data/programsData";
import { ProgramCard } from "./ProgramsCard";

export const ProgramsView = () => {
	return (
		<section className="container mx-auto my-14 grid w-fit grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
			{Object.keys(programsData).map((key) => {
				let program = programsData[key];
				return (
					<ProgramCard
						img={program.img}
						key={key}
						name={program.name}
						href={key}
					/>
				);
			})}
		</section>
	);
};
