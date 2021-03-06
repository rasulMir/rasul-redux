import React from 'react';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';

const box = {
	display: 'flex',
	justifyContent : 'flex-end',
	alignItems : 'stretch',
	border : '1px solid green',
	background : 'grey',
}

const typography = {
	fontSize : '20px',
	textAlign : 'center',
	padding: '10px 2px',
	color: 'white'
}

interface Props {}

export default function TopOutput({}: Props) {

	const enter: Array<string | number> = useSelector((state: any) => state.task2.symbols);

	const elements = enter.map((item: string | number, i) => (
		<Typography sx={typography} key={i}>
			{ item }
		</Typography>
	));

	return (
		<Box sx={box}>
			{ elements }
		</Box>
	)
}