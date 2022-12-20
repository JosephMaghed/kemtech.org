import { programsData } from "data/programsData";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

//styles
import styles from "./Footer.module.sass";

//images
import facebookLogo from "assets/face-mono.svg";
import instaLogo from "assets/insta-mono.svg";
import kemtechLogo from "assets/kemtech-simi-white.svg";
import linkedinLogo from "assets/linkedin-mono.svg";
import locationIcon from "assets/location.svg";
import mailIcon from "assets/mail.svg";
import teleIcon from "assets/tele.svg";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.topFooter}>
				<div className={styles.topLeft}>
					<Image
						src={kemtechLogo}
						alt="kemtech logo"
						width={180}
						height={180}
					/>
				</div>
				<div className={styles.topRight}>
					{/* Programs column dynamically created form programData */}
					<div className={styles.footerColumn}>
						<h4 className={styles.columnTitle}>Kemtech Programs</h4>
						<ul>
							{Object.keys(programsData).map((key) => (
								<Link
									key={`/programs/${programsData[key].name
										.toLowerCase()
										.split(" ")
										.join("-")}`}
									href={`/programs/${key}`}
								>
									<li className={styles.columnRow}>
										{programsData[key].name.replace(
											"Program",
											""
										)}
									</li>
								</Link>
							))}
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<h4 className={styles.columnTitle}>Follow us</h4>
						<ul>
							<li className={styles.social}>
								<a
									href="https://www.facebook.com/Kemtechian"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										alt="facebook icon"
										src={facebookLogo}
									/>
									<span>Kemtechian</span>
								</a>
							</li>

							<li className={styles.social}>
								<a
									href="https://instagram.com/kemtechian"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										alt="Instagram icon"
										src={instaLogo}
									/>
									<span>Kemtechian</span>
								</a>
							</li>

							<li className={styles.social}>
								<a
									href="https://www.linkedin.com/company/kemtech-valley/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										alt="Linkedin logo"
										src={linkedinLogo}
									/>
									<span>Kemtech valley</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<h4 className={styles.columnTitle}>Support</h4>
						<ul>
							<Link href={"/privacy-policy"}>
								<li className={styles.columnRow}>
									Privacy Policy
								</li>
							</Link>
							<Link href={"/contact"}>
								<li className={styles.columnRow}>Contact us</li>
							</Link>
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<h4 className={styles.columnTitle}>Connect with us</h4>
						<ul>
							<li className={styles.social}>
								<a
									href="mailto:info@kemtech.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image alt="Linkedin logo" src={mailIcon} />
									<span>Info@kemtech.org</span>
								</a>
							</li>

							<li className={styles.social}>
								<a
									href="tel:+201001222844"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image alt="Linkedin logo" src={teleIcon} />
									<span>+20 100 122 2844</span>
								</a>
							</li>

							<li className={styles.social}>
								<a
									href="tel:+201050971717"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image alt="Linkedin logo" src={teleIcon} />
									<span>+20 105 097 1717</span>
								</a>
							</li>

							<li className={styles.social}>
								<a
									href="https://goo.gl/maps/mH3m9Dh4aTva1dFC6"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										alt="Linkedin logo"
										src={locationIcon}
									/>
									<span>5th settlement, El-louts, cairo</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.bottomFooter}>
				<p>PTS HOLDINGS</p>
				<p>2022 © ALL RIGHTS RECEIVED</p>
			</div>
		</footer>
	);
}
