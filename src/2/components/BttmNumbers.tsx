import { Button, Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/reducer2';
const box = {
	display: 'grid',
	gap: 2,
	gridTemplateColumns: 'repeat(4, 1fr)',
	'& > *' : {fontSize: '20px'}
}

interface Props {}

const buttons: Array<number | string> = [
	1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'.','=','/'
]

export default function BttmNumbers({}: Props) {
	const store = useSelector((store: any) => store.task2.enter);
	console.log(store);
	const dispatch = useDispatch();

	const btnsElem = buttons.map( (item, i) => {
		if (item === '=') {
			return <Button key={i}
					onClick={() => dispatch(add('='))}
					variant='contained'>
					{item}
			</Button>
		}
		else {
			return(
				<Button key={i}
					onClick={() => dispatch(add(item))}
					variant='outlined'
					color={Number.isInteger(item) || item === '.' ?  'success' : undefined}>
					{item}
				</Button>
			);
		}
	});

	return (
		<Box sx={box}>
			{ btnsElem }
		</Box>
	)
}