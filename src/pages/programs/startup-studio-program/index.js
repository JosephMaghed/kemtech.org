import ProgramPage from "components/ProgramPage";
import Head from "next/head";

export default function startupStudioProgram() {
	return (
		<>
			<Head>
				<title>{"Startup# Studio Kemtech"}</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<ProgramPage pId={"startup-studio"} />;
		</>
	);
}
