import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

//styles
import styles from "./Navbar.module.sass";

//imgs
import logo from "assets/kemtech_full_white.svg";
import hamburgerMenu from "assets/menu-icon.svg";
import xIcon from "assets/x.svg";
import { Banner } from "./Banner";

export default function Navbar() {
	// Current page
	const router = useRouter();
	const currentPage = router.pathname;

	//responsive nav toggle handler
	const [isToggled, setToggled] = useState(false);

	const navToggleHandler = (isToggleBoolean) => {
		// Change state to the nav toggle
		setToggled(() => isToggleBoolean, [isToggled, setToggled]);

		// Turn off scroll when toggled
		isToggleBoolean
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "initial");
	};

	// Data to Generate nav links
	let navLinks = [
		{ pageName: "Home", pageLink: "/" },
		// { pageName: "Kemtech Forum", pageLink: "/kemtech-forum" },
		{ pageName: "About kemtech", pageLink: "/about" },
		{ pageName: "Kemtech programs", pageLink: "/programs" },
		{ pageName: "Community", pageLink: "/community" },
		{ pageName: "Careers", pageLink: "/careers" },
		{ pageName: "Partners", pageLink: "/partners" },
	];

	return (
		<header>
			<nav className={styles.navbar}>
				<div
					className={
						isToggled ? styles.navWarperActive : styles.navWarper
					}
				>
					<Link href="/">
						<Image
							className={styles.logo}
							src={logo}
							width={100}
							height={100}
							alt="Kemtech logo"
							onClick={() => navToggleHandler(false)}
						/>
					</Link>
					<div className={styles.navItemContainer}>
						{navLinks.map((navLink) => (
							<div
								key={navLink.pageLink}
								className={
									currentPage === navLink.pageLink
										? styles.navItemActive
										: styles.navItem
								}
								onClick={() => navToggleHandler(false)}
							>
								<Link href={navLink.pageLink}>
									{navLink.pageName}
								</Link>
							</div>
						))}
					</div>
					<div className={styles.applyButton}>
						<Button
							innerText="Apply Now"
							type="primary"
							href="/kemtech-forum"
						/>
					</div>
					<div
						className={styles.xToggle}
						onClick={() => navToggleHandler(false)}
					>
						<Image src={xIcon} alt="" height={40} width={40} />
					</div>
				</div>

				<div
					className={styles.menuToggle}
					onClick={() => navToggleHandler(true)}
				>
					<Image src={hamburgerMenu} alt="" height={40} width={40} />
				</div>
			</nav>

			{/* <Banner /> */}
		</header>
	);
}
