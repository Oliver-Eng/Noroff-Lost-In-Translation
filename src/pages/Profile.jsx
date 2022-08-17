import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import MainContext from '../context/MainContext';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth';

const Profile = () => {
	const { state, setState } = useContext(MainContext);

	// vvvvvv this should probably be inside a component of its own...
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	const logOut = () => {
		localStorage.removeItem(STORAGE_KEY_USER);
		setUser(null);
		navigate('/');
	};
	// ^^^^^^ this should probably be inside a component of its own...

	return (
		<>
			<Link to='/'>TO HOME</Link>
			<p>STATE IS EQUAL TO: {state}</p>
			<p>YOUR CURRENT USER IS: {user.username}</p>
			<button onClick={logOut}>Log Out</button>
		</>
	);
};

export default withAuth(Profile);
