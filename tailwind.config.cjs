/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'c1': '#041B15',
				'c2': '#136F63',
				'c3': '#22AAA1',
				'c4': '#4CE0D2',
				'c5': '#84CAE7',
				'dc2': '#05332D',
				'lc4': '#DCFFFC',
				'llc4': '#f5fffe',
				'bg': '#EEF6DD',
				'dkrbg': '#dae3c3',
			},
		},
		container: {
				padding: '1rem',
			},
		},
	plugins: [],
}
