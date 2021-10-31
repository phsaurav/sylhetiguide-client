const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		colors: {
			green: {
				10: '#F2F3F5',
				20: '#6A87C1',
				30: '#5973B0',
				40: '#2F4171',
				50: '#222e52',
				...colors.green,
			},
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			bluegray: colors.blueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			orange: colors.orange,
			blue: colors.blue,
			lime: colors.lime,
			brand: {
				1: '#137257',
				2: '#137257',
				// 2: '#7DC242',
				3: '#137257',
				4: '#FF7F54',
				5: '#FB5C19',
				6: '#333333',
				7: '#daebe8',
				8: '#7DC242',
				9: '#25B04B',
			},
		},
		fontFamily: {},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '7rem',
			'9xl': '9rem',
			'10xl': '12rem',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
