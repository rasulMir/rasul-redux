import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { gas, liquid, solid } from '../redux/actionCreators';

const BtnGroup = {
	margin : '20px'
}

interface Props {}

export default function TopBtns({}: Props) {
	const dispatch = useDispatch();

	return (
		<ButtonGroup
			sx={BtnGroup}
			variant='contained' size="large"
			aria-label="large button group">
			<Button onClick={() => dispatch(gas())}>GAS</Button>
			<Button onClick={() => dispatch(liquid())}>LIQUID</Button>
			<Button onClick={() => dispatch(solid())}>SOLID</Button>
		</ButtonGroup>
	)
}