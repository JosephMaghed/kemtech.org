import InstaDeelLogo from "assets/instadeel-logo.jpeg";
import Button from "components/Button";
import Image from "next/image";
import styles from "./InstaDeelCard.module.sass";

export const InstaDeelCard = ({ href, buttonText }) => {
	if (!href) {
		href = "https://instadeel.com/business/130/Kemtech%20valley";
	}
	if (!buttonText) {
		buttonText = "Get discount";
	}
	return (
		<div className={styles.container}>
			<div className={styles.leftWrapper}>
				<h2>Get Your discount now on Instadeel !</h2>
				<p>
					We have partnered with Instadeel to supply you with endless
					offers to grow yourself, your team, & your startup
				</p>

				<Button innerText={buttonText} type="primary" href={href} />
			</div>
			<div className={styles.rightWrapper}>
				<Image
					src={InstaDeelLogo}
					alt="Instadeel Logo"
					width={500}
					height={217}
				/>
			</div>
		</div>
	);
};
