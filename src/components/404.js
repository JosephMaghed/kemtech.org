// imgs
import svg404 from "assets/404.svg";
import underConstructionSVG from "assets/Under-construction.svg";
import Button from "components/Button";
import Image from "next/image";

export default function Custom404() {
	return (
		<section className="container w-fit py-20 flex flex-col justify-center ">
			<Image src={svg404} alt="Page Not Found" />
			<div className="mx-auto mt-5">
				<Button
					type="secondary-black"
					innerText="Return to kemtech"
					href="/"
				/>
			</div>
		</section>
	);
}
