import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

//imgs
import logo from "assets/kemtech_full_white.svg";

export default function Navbar() {
	// Current page
	const router = useRouter();

	//	FIXME: this current page implementation dose not recognize dynamic routes in next.js,
	//	For example, "/programs/technovate-lab" will be "/programs/[progId]"
	const currentPage = router.pathname;

	// Data to Generate nav links
	let navLinks = [
		{ pageName: "Home", pageLink: ["/"] },
		{ pageName: "About kemtech", pageLink: ["/about"] },
		{
			pageName: "Kemtech programs",
			pageLink: [
				"/programs",
				"/programs/technovate-lab",
				"/programs/training-&-career-development",
				"/programs/startup-studio",
				"/programs/bashkateb-io",
			],
		},
		{ pageName: "Community", pageLink: ["/community"] },
		{ pageName: "Careers", pageLink: ["/careers"] },
		{ pageName: "Partners", pageLink: ["/partners"] },
	];

	return (
		<header className="sticky top-0 z-50">
			<nav className="navbar  bg-blue-basic text-white-basic">
				<div className="navbar-start ">
					<div className="dropdown">
						<label tabIndex={0} className="btn-ghost btn lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<div
							tabIndex={0}
							className="text-b dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-white-basic p-2 text-black-basic shadow"
						>
							{navLinks.map((navLink) => (
								<Link
									href={navLink.pageLink[0]}
									key={navLink.pageLink[0].toString()}
								>
									<button
										className={` btn-ghost btn font-medium capitalize ${
											navLink.pageLink.includes(
												currentPage
											) &&
											" rounded-lg bg-yellow-basic text-zinc-800 hover:bg-yellow-basic active:bg-yellow-basic"
										}`}
									>
										{navLink.pageName}
									</button>
								</Link>
							))}
						</div>
					</div>
					<div className="btn-ghost btn h-fit">
						<Link href="/">
							<div className=" w-16 cursor-pointer py-2 md:w-24">
								<Image
									src={logo}
									objectFit="fill"
									alt="Kemtech logo"
								/>
							</div>
						</Link>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<div className="menu menu-horizontal px-1">
						{navLinks.map((navLink) => (
							<Link
								href={navLink.pageLink[0]}
								key={navLink.pageLink[0].toString()}
							>
								<button
									className={`btn-ghost btn font-medium capitalize ${
										navLink.pageLink.includes(
											currentPage
										) &&
										" rounded-lg bg-yellow-basic  text-zinc-800 hover:bg-yellow-basic"
									}`}
								>
									{navLink.pageName}
								</button>
							</Link>
						))}
					</div>
				</div>
				{/* <div className="navbar-end">
					<a className="btn-secondary btn">Get started</a>
				</div> */}
			</nav>
		</header>
	);
}
