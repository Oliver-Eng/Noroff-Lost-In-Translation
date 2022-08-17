import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth';

const Translation = () => {
	const { state, setState } = useContext(MainContext);
	const { user } = useUser();

	return (
		<>
			<Link to='/profile'>TO PROFILE</Link>
			<p>STATE IS EQUAL TO: {state}</p>
			<p>YOUR CURRENT USER IS: {user.username}</p>
		</>
	);
};

export default withAuth(Translation);
