export const colors = {
	main: '#98ca3f', //green
	second: '#182C3F', // blue
	lightSecond: '#3C8DC7', // light blue
	darkSecond: '#0D4976', // light blue
	white: '#F9F9F9', // white
	text: '#4c4c4c', //gray
};

export const fonts = {
	fontBebas: "'Bebas Neue', cursive",
	fontLato: "'Lato', sans-serif",
	h1: '2rem',
	h2: '1.5rem',
	h3: '1.2rem',
	p: '1rem',
	small: '.8rem',
};

export const spacing = {
	space: '',
	space2: '',
	space3: '',
	space4: '',
};

export const border = {
	borderRadiusSmall: '10px',
	borderRadiusBig: '20px',
};

// media queries
const mediaSize = {
	mobile: '320px',
	tablet: '720px',
	miniDesktop: '920px',
	littleDesktop: '1315px',
	desktop: '1440px',
};

export const mediaQueries = {
	mobile: `(max-width: ${mediaSize.mobile})`,
	tablet: `(max-width: ${mediaSize.tablet})`,
	miniDesktop: `(max-width: ${mediaSize.miniDesktop})`,
	littleDesktop: `(max-width: ${mediaSize.littleDesktop})`,
	desktop: `(max-width: ${mediaSize.desktop})`,
};
