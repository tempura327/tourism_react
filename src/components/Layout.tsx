import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import MuiLink from '@mui/material/Link';

import Appbar from './Appbar';

const Link = styled(MuiLink)(({ theme }) => {
	// TO DO: change border color according to color prop.
	return `
	padding: 8px 0;
	margin: 0 20px;
	text-decoration: none;
	cursor: pointer;
	border-color: transparent;
	
	&:hover {
		background-color: transparent;
		border-bottom: 1px double ${theme.palette.info.dark};
	}
`;
});

const Layout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const links = [
		{ text: '首頁', link: '/' },
		{ text: '觀光活動', link: '/activity' },
		{ text: '景點導覽', link: '/attraction' },
	];

	return (
		<>
			<Appbar>
				{links.map(({ text, link }) => {
					return (
						<Link
							key={link}
							color={link === pathname ? 'primary' : 'info.dark'}
							onClick={() => {
								navigate(link);
							}}
						>
							{text}
						</Link>
					);
				})}
			</Appbar>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	);
};

export default Layout;
