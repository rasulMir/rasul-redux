import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Container } from '@mui/material';

interface Props {}

export default function MainNav({}: Props) {
	return (
		<Container maxWidth="lg">
			<ButtonGroup
			 	sx={{ margin : '15px 0'}}
				variant="contained"
				aria-label="outlined primary button group"
				fullWidth={true}
				>
				<Button>
					<Link to='task1' style={{flex: '1 0 100%', padding: '5px'}}> Redux 1 </Link>
				</Button>
				<Button>
					<Link to='task2' style={{flex: '1 0 100%', padding: '5px'}}> Redux 2 </Link>
				</Button>
			</ButtonGroup>
		</Container>
	)
}