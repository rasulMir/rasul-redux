import React from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clear } from '../redux/actionCreators';

const box = {
	display: 'grid',
	gap: 2,
	gridTemplateColumns: '1fr',
}

interface Props {}

export default function ClearBtn({}: Props) {
	const dispatch = useDispatch();
	
	return (
		<Box sx={box}>
			<Button variant='contained' color='error' onClick={() => dispatch(clear())}>
				Очистить
			</Button>
		</Box>
	)
}