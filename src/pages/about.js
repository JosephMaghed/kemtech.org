import FoundersWord from "components/about/FoundersWord";
import Introduction from "components/about/Introduction";
import KemtechArt from "components/about/KemtechArt";
import ContactForm from "components/ContactForm";
import Head from "next/head";
export default function about() {
	return (
		<>
			<Head>
				<title>About Us</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="The Egyptian Applied Technological Valley – “Kemtech Valley” is initiative between PTS Holdings and New Cairo Technological University (NCT) aims to train and develop Egyptian youth in applied technology field."
				/>
			</Head>
			<div className="mb-24">
				<Introduction />
				<KemtechArt />
				<FoundersWord />
				<div className="container mx-auto md:w-3/4">
					<ContactForm />
				</div>
			</div>
		</>
	);
}
