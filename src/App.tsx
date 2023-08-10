import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import router from './router/index';
import theme from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	);
};

export default App;
