import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Task1 from './1/Task1';
import Task2 from './2/Task2';
import Task3 from './3/Task3';
import MainNav from './MainNav';

function App() {
  return (
    <Routes>
			<Route path='/' element={<MainNav/>}/>
			<Route path='task1' element={<Task1/>}/>
			<Route path='task2' element={<Task2/>}/>
			<Route path='task3' element={<Task3/>}/>
		</Routes>
  );
}

export default App;
