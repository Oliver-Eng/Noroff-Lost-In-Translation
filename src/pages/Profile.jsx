import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { useUser } from '../context/UserContext';
import { deleteTranslations } from './../sources/user';
import withAuth from '../hoc/withAuth';

const Profile = () => {
	// vvvvvv this should probably be inside a component of its own...
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	// Clears localstorage and navigates to frontpage
	const logOut = () => {
		localStorage.removeItem(STORAGE_KEY_USER);
		setUser(null);
		navigate('/');
	};
	// ^^^^^^ this should probably be inside a component of its own...

	useEffect(() => {	
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)	
			.then(res => res.json())
			.then(json => {					
				let responseIsEmpty = Object.keys(json).length === 0

				if (responseIsEmpty) {					
					localStorage.removeItem(STORAGE_KEY_USER);
					navigate("/")
				}
			})
	}, [])

	return (
		<>
			<Link to='/'>TO HOME</Link>
			<p>YOUR CURRENT USER IS: {user.username}</p>
			<button onClick={logOut}>Log Out</button>
			<button onClick={() => deleteTranslations(user.id)}>Delete history</button>

			<h2>Search Results</h2>
			{user.translations.map((tran, index) => {
				return <div key={index}>{tran}</div>
			})}
		</>
	);
};

export default withAuth(Profile);
