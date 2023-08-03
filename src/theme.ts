import { red, yellow, lightGreen } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#08A6BB',
		},
		secondary: {
			main: yellow[600],
		},
		legibility: {
			'80': '#313131',
			'60': '#525151',
			'40': '#AEAEAE',
			'20': '#CBCBCB',
			white: '#fffff',
		},
		success: {
			main: lightGreen[600],
			dark: lightGreen[900],
			light: lightGreen[300],
		},
		error: {
			main: red[600],
			dark: red[900],
			light: red[300],
		},
		info: {
			main: '#546487',
			dark: '#6F7789',
			light: '#a7b7db',
		},
		shadow: {
			main: 'rgba(51,51,51,.5)',
			dark: 'rgba(51,51,51,.7)',
			light: 'rgba(51,51,51,.3)',
		},
	},
	zIndex: {
		appBar: 1000,
	},
});

export default theme;
