import { Box, Container } from '@mui/material';
import React from 'react';
import BackMainPageBtn from '../BackMainPageBtn';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

const filter = createFilterOptions<FilmOptionType>();

interface Props {}

export default function Task1({}: Props) {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
	return (
		<>
			<BackMainPageBtn/>
			<Container maxWidth='sm'>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '100%' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField id="standard-basic" label="Standard" variant="standard" />
			</Box>
			</Container>
		</>
	)
}