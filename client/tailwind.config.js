module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn 3s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: 0,
					},
					'50%': {
						opacity: 0.5,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
			ontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				'main-blue': '#011f4b',
				'secondary-blue': '#00518a',
				'start-button': '#005b96',
				'join-button': '#b3cde0',
			},
			backgroundImage: {
				'main-background': 'linear-gradient(to bottom, #011f4b 80%, #00518a);',
			},
		},
	},
	plugins: [],
};
