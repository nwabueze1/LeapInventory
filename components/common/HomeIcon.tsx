import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > svg': {
				margin: theme.spacing(2),
			},
		},
	}),
);

export default function HomeIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	);
}
