import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function BackMainPageBtn({}: Props) {
	console.log('BackMainPageBtn')
	let navigate = useNavigate();
	return (
		<Box sx={{ margin: '15px 0', display : 'flex', justifyContent: 'center' }}>
			<Button onClick={() => navigate('/')} variant='contained' >
				Back To Main Page
			</Button>
		</Box>
	)
}