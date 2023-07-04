import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Attraction from '../pages/Attraction';
import Activity from '../pages/Activity';

// const routes = [
// 	{
// 		basename:'/tourism_react',
// 		children:[
// 			{
// 				path: '/',
// 				element: <Home />,
// 			},
// 			{
// 				path: '/attraction',
// 				element: <Attraction />,
// 			},
// 			{
// 				path: '/activity',
// 				element: <Activity />,
// 			},
// 		]
// 	},
// ];

const routes = [
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
];

const router = createBrowserRouter(routes);

export default router;