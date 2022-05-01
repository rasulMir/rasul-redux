import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Container, Button, Popover, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addTodo } from '../redux/reducer1';

interface Props {}

export default function TodoForm({}: Props) {

	const [text, setText] = useState<string>(''); 
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const randomId = () => (Math.random().toString(36).slice(2,12));
	const dispatch = useDispatch();
	const addItem = (e:React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (text.trim().length) {
			dispatch(addTodo({
				text,
				id: randomId()
			}));
			setText('');
		}
		else {
			setAnchorEl(e.currentTarget);
		}
	}
	const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
	return (
		<Container maxWidth='sm'>
			<Box
				component="form"
				sx={{
					width : '100%',
					display : 'flex',
					justifyContent: 'space-between',
					aliginItems : 'center',
					'& > :not(style)': { m: 1 },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="standard-basic"
					label="Type TODO..."
					variant="standard"
					sx={{flex: '0 0 70%'}}
					value={text}
					onChange={(e) => setText(e.target.value)}
					/>
				<Popover 
					open={open}
					id={id}
					anchorEl={anchorEl}
					onClose={() => setAnchorEl(null)}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<Typography sx={{ p: 2, background: 'black', color: 'white'}}>
						You have to fill text.
					</Typography>
				</Popover>
				<Button
					variant='contained'
					type='submit'
					sx={{flex: '0 0 20%'}}
					onClick={addItem}
					>
					Add
				</Button>
			</Box>
		</Container>
	)
}