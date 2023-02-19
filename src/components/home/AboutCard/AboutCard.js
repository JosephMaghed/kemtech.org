import Image from "next/image";
import { Fragment } from "react";
import ScrollAnimate from "react-scroll-fade-animation";

// Components
import Button from "components/Button";

// Styles
import styles from "./AboutCard.module.sass";

// Images
import studentsImg from "assets/students.webp";
import Link from "next/link";

export const AboutCard = () => {
	return (
		<Fragment>
			<ScrollAnimate path={"top"}>
				<div className={styles.AboutCard}>
					<div className={styles.leftColumn}>
						<h2>Empowering Technovation In Egypt</h2>
						<p>
							{` Believing in the value of modern technology in all sectors of
            business and in accordance with Egypt 2030's sustainable development
            plan, Kemtech Valley always seeks to increase support and investment
            for technological projects. Therefore, The best partner to
            accomplish this goal was New Cairo University of Technology.`}
						</p>
						<Link href="/about">
							<button className="btn-outline btn-secondary btn mt-5">
								About Us
							</button>
						</Link>
					</div>
					<div className={styles.rightColumn}>
						{/* <Image src={studentsImg} layout="intrinsic" alt="" /> */}
					</div>
				</div>
			</ScrollAnimate>
		</Fragment>
	);
};
