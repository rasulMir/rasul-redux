import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BttmNumbers from './components/BttmNumbers';
import ClearBtn from './components/ClearBtn';
import TopOutput from './components/TopOutput';

const container = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh'
}

const box = {
	background: '#2C2C2C',
	padding: ' 40px',
	display: 'grid',
	gap: 3,
	gridTemplateColumns: '1fr',
	gridTemplateRows: '.5fr 2fr .5fr',
	height: '400px',
	fontSize: '20px'
}

interface Props {}

export default function Task2({}: Props) {
	return (
		<Container maxWidth='md' sx={container}>
			<Box sx={box}>
				<TopOutput/>
				<BttmNumbers/>
				<ClearBtn/>
			</Box>
		</Container>
	)
}