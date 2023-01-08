import { useEffect } from "react";
import Layout from "../Layout";
import "../styles/globals.sass";

// Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Import Animation
import AOS from "aos";
import "aos/dist/aos.css";

//React tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
			<ToastContainer />
		</Layout>
	);
}

export default MyApp;
