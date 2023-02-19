/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.5rem",
			},

			colors: {
				blue: {
					100: "#C8E5FA",
					200: "#94C8F6",
					300: "#5C9FE6",
					400: "#3378CD",
					basic: "#252da3",
					dark: "#292C6B",
				},

				yellow: {
					100: "#FEF4D1",
					200: "#FEE7A4",
					300: "#FCD475",
					400: "#FAC253",
					basic: "#f7a41c",
				},

				black: {
					basic: "#2E3D49",
				},

				white: {
					basic: "#FBFBFB",
				},

				gray: {
					100: "#FCFCFD",
					200: "#F2F4F7",
					300: "#E4E7EC",
					400: "#D0D5DD",
					500: "#98A2B3",
					600: "#667085",
				},

				warning: {
					200: "#FFFA9F",
					300: "#FFF770",
					400: "#FFF44C",
					basic: "#FEEF10",
				},

				error: {
					200: "#FFD4C1",
					300: "#FEB6A0",
					400: "#FF9B8B",
					basic: "#FF6D63",
				},

				success: {
					200: "#C0FDC1",
					300: "#9DF8A9",
					400: "#83F49C",
					basic: "#5CEC8A",
				},
			},

			animation: {
				"fadeIn-right": "fadeIn-right 0.6s ease-in-out",
			},

			keyframes: {
				"fadeIn-right": {
					"0%": { transform: "translateX(-100px)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 },
				},
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				KemtechBrand: {
					primary: "#252da3",
					secondary: "#f7a41c",
					accent: "#adb0ff",
					neutral: "#06b6d4",
					"base-100": "#FFFFFF",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
		],
	},
};
