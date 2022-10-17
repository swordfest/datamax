/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "360px",
				// => @media (min-width: 360px) { ... }

				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }

				"3xl": "1820px",
				// => @media (min-width: 1820px) { ... }

				"3xl": "2480px",
				// => @media (min-width: 2480px) { ... }
			},
			fontFamily: {
				twemoji: ["Twemoji", "sans-serif"],
				awesome: ["FontAwesome", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
}
