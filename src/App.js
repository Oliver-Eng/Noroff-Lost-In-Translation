import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Translation from './pages/Translation';
import Profile from './pages/Profile';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='translation' element={<Translation />} />
				<Route path='profile' element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
