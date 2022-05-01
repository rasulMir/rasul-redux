import { Box } from '@mui/material';
import React from 'react';
import BackMainPageBtn from '../BackMainPageBtn';
import BttmOutput from './components/BttmOutput';
import Title from './components/Title';
import TopBtns from './components/TopBtns';

const box = {
	width: '300px',
	padding : '10px',
	margin : '50px auto',
	background : 'grey'
}

interface Props {}

export default function Task3({}: Props) {
	return (
		<Box sx={box}>
			<BackMainPageBtn/>
			<Title title='Change state' />
			<TopBtns/>
			<Title title='H2O is Feeling :' />
			<BttmOutput/>
		</Box>
	)
}