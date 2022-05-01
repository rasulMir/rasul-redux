import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const output = {
	fontSize : '20px',
	color: 'blue'
}

interface Props {}

export default function BttmOutput({}: Props) {
	const waterState = useSelector( (state : any) => state.task3.waterState);
	return (
		<Typography sx={output}>
			{ waterState }
		</Typography>
	)
}