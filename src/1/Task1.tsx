
import React from 'react';
import BackMainPageBtn from '../BackMainPageBtn';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface Props {}

export default function Task1({}: Props) {
	return (
		<>
			<BackMainPageBtn/>
			<TodoForm/>
			<TodoList/>
		</>
	)
}