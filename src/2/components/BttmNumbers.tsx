import { Button, Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { number, add, comma, multiply, equal, division, substract } from '../redux/actionCreators';

const box = {
	display: 'grid',
	gap: 2,
	gridTemplateColumns: 'repeat(4, 1fr)',
	'& > *' : {fontSize: '20px'}
}

interface Props {}

export default function BttmNumbers({}: Props) {
	const store = useSelector((store: any) => store.task2.symbols);
	console.log(store);
	const dispatch = useDispatch();
	return (
		<Box sx={box}>

			<Button
				onClick={() => dispatch(number(1))}
				variant='outlined'
				color='success'>
				1
			</Button>

			<Button
				onClick={() => dispatch(number(2))}
				variant='outlined'
				color='success'>
				2
			</Button>

			<Button
				onClick={() => dispatch(number(3))}
				variant='outlined'
				color='success'>
				3
			</Button>

			<Button
				onClick={() => dispatch(add())}
				variant='outlined'>
				+
			</Button>

			<Button
				onClick={() => dispatch(number(4))}
				variant='outlined'
				color='success'>
				4
			</Button>

			<Button
				onClick={() => dispatch(number(5))}
				variant='outlined'
				color='success'>
				5
			</Button>

			<Button
				onClick={() => dispatch(number(6))}
				variant='outlined'
				color='success'>
				6
			</Button>

			<Button
				onClick={() => dispatch(substract())}
				variant='outlined'>
				-
			</Button>

			<Button
				onClick={() => dispatch(number(7))}
				variant='outlined'
				color='success'>
				7
			</Button>

			<Button
				onClick={() => dispatch(number(8))}
				variant='outlined'
				color='success'>
				8
			</Button>

			<Button 
				onClick={() => dispatch(number(9))} 
				variant='outlined' 
				color='success'>
					9
			</Button>
				
			<Button 
				onClick={() => dispatch(multiply())} 
				variant='outlined'> 
				*
			</Button>

			<Button 
				onClick={() => dispatch(number(0))} 
				variant='outlined' 
				color='success'>
				0
			</Button>

			<Button 
				onClick={() => dispatch(comma())} 
				variant='outlined' 
				color='success'>
				.
			</Button>

			<Button 
				onClick={() => dispatch(equal())} 
				variant='contained'>
				=
			</Button>

			<Button 
				onClick={() => dispatch(division())} 
				variant='outlined'>
				/
			</Button>

		</Box>
	)
}