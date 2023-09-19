/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		screens: {
			sm: "380px",
			md: "420px",
			lg: "680px",
			// or maybe name them after devices for `tablet:flex-row`
			tablet: "1024px",
		},
		extend: {
			colors: {
				primary: {
					500: "#640233",
					600: "#72063c",
					700: "#4e0329",
					800: "#3b021f",
				},
				accent: { 500: "#ddb92f" },
			},
		},
	},
	plugins: [],
};
