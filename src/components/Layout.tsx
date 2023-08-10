import { Outlet } from 'react-router-dom';

import Appbar from './Appbar';

const Layout = () => {
	return (
		<>
			<Appbar></Appbar>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	);
};

export default Layout;
