import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Task1 from './1/Task1';
import MainNav from './MainNav';

function App() {
  return (
    <Routes>
			<Route path='/' element={<MainNav/>}/>
			<Route path='task1' element={<Task1/>}/>
		</Routes>
  );
}

export default App;
