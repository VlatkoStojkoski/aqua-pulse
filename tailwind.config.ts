import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			backgroundImage: {
				'quiz-ocean': 'linear-gradient(to top, rgba(10, 10, 10, 0.8) 50%, rgba(10, 10, 10, 0.5)), url(/assets/img/quiz-ocean.jpg)',
				'quiz-species': 'linear-gradient(to top, rgba(10, 10, 10, 0.8) 50%, rgba(10, 10, 10, 0.5)), url(/assets/img/quiz-species.jpg)'
			},
			colors: {
        primary: "#0071BC",
				'primary-dark': '#065d96',
				'primary-light': '#0d85d4',
				'primary-lighter': '#58b2ed'
			},
			fontFamily: {
				heading: 'var(--font-koulen)',
				body: 'var(--font-inter)'
			}
		},
  },
  plugins: [],
} satisfies Config;
