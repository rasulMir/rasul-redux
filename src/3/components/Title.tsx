import { Typography } from '@mui/material';
import React from 'react';

const typography = {
	color : 'white',
	textAlign : 'center',
}

interface Props {
	title : string
}

export default function Title({ title }: Props) {
	
	return (
		<Typography sx={typography}>
			{ title }
		</Typography>
	)
}