// 以下的註解是為了使用emotion的css prop，沒放的話TS會報錯
/** @jsxImportSource @emotion/react */
import { FunctionComponent, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

import MuiAppbar from '@mui/material/AppBar';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as WebsiteTitle } from '../assets/Travel Taiwan.svg';

const Box = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Appbar: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<MuiAppbar
			css={css`
				padding: 24px;
			`}
		>
			<Box>
				<Logo
					css={css`
						margin-right: 24px;
					`}
				/>
				<WebsiteTitle />
			</Box>

			<Box>{children}</Box>
		</MuiAppbar>
	);
};

export default Appbar;
