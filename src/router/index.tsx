import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Attraction from '../pages/Attraction';
import Activity from '../pages/Activity';

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/attraction',
				element: <Attraction />,
			},
			{
				path: '/activity',
				element: <Activity />,
			},
		],
	},
];

const router = createBrowserRouter(routes, {
	basename: '/tourism_react',
});

export default router;
