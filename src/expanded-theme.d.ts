import '@material-ui/core/styles';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		legibility?: {
			'80': string;
			'60': string;
			'40': string;
			'20': string;
			white: string;
		};
		shadow?: {
			main: string;
			dark: string;
			light: string;
		};
	}
}
