import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { useUser } from '../context/UserContext';
import { deleteTranslation } from './../sources/user';
import withAuth from '../hoc/withAuth';

const Profile = () => {
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
			<p>YOUR CURRENT USER IS: {user.username}</p>
			<button onClick={logOut}>Log Out</button>
			<button onClick={() => deleteTranslation(user.id)}>Delete history</button>

			<h2>Search Results</h2>
			{user.translations.map((tran, index) => {
				return <div key={index}>{tran}</div>
			})}
		</>
	);
};

export default withAuth(Profile);
