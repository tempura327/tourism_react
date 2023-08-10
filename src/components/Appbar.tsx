import { FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import MuiAppbar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as WebsiteTitle } from '../assets/Travel Taiwan.svg';

const Appbar: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<MuiAppbar>
			<div>
				<Logo />
				<WebsiteTitle />
			</div>

			<div>
				{children}
				<Button
					variant='text'
					onClick={() => {
						navigate('/activity');
					}}
				>
					活動
				</Button>

				<Button
					variant='text'
					onClick={() => {
						navigate('/attraction');
					}}
				>
					景點
				</Button>
			</div>
		</MuiAppbar>
	);
};

export default Appbar;
