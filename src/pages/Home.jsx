import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import LoginForm from '../components/Login/LoginForm';

const Home = () => {
	const { state, setState } = useContext(MainContext);

	return (
		<>
			<LoginForm />
		</>
	);
};

export default Home;
