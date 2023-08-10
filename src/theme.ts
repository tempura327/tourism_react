import { red, yellow, lightGreen } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const palette = {
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
};

// A custom theme
const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'white',
					color: palette.primary.main,
					position: 'relative',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					color: palette.legibility.white,
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				InputLabelProps: {
					shrink: true,
				},
			},
		},
	},
	palette,
	spacing: 4,
	zIndex: {
		appBar: 1000,
	},
	shape: {
		borderRadius: 4,
	},
});

export default theme;
