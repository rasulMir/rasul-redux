import { List, ListItemText, Container, ListItem, Button, ButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delTodo, IListItem, editTodo } from '../../redux/reducer1';

interface Props {}

export default function TodoList({}: Props) {

	const store: any = useSelector((state:any) => state.task1.toDoList);
	const dispatch = useDispatch();
	let [editTxt, setEditTxt] = useState<string | null>('');
	console.log(store);
	if (!store.length) {
		return (
			<Container maxWidth='sm'>
				<Typography>Empty</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth='sm'>
			<List
				sx={{
					width: '100%',
					maxWidth: '100%',
					bgcolor: 'background.paper',
					position: 'relative',
					overflow: 'auto',
					maxHeight: 450,
					borderRadius : '5px',
					border: '1px solid grey',
					'& ul': { padding: 0 },
				}}
			>
				{
					store.map((item: IListItem) => (
						<ListItem key={item.id}>
							<Typography
								sx={{textDecoration: 'underline', border: "none", flex: '1 0 '}} 
								contentEditable={true}
								suppressContentEditableWarning={true}
								onInput={	(e:React.FormEvent) => {
										dispatch(editTodo({
											id: item.id,
											text: e.currentTarget.textContent || item.text
									 	}))
									}}
								>
								{item.text}
							</Typography>
							<ButtonGroup variant="contained" aria-label="contained button group">
								<Button>
									Edit
								</Button>
								<Button onClick={() => dispatch(delTodo(item.id))}>Delete</Button>
							</ButtonGroup>
						</ListItem>
					))
				}
			</List>
		</Container>
	)
}
