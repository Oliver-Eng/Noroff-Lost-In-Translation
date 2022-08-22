import React, { useEffect } from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Top/Top';
import ProfileSection from '../components/Profile/ProfileSection';
import { useUser } from '../context/UserContext';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { useNavigate } from 'react-router';

const Profile = () => {
	const { user } = useUser();

	const navigate = useNavigate;

	useEffect(() => {
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)
			.then((res) => res.json())
			.then((json) => {
				let responseIsEmpty = Object.keys(json).length === 0;

				if (responseIsEmpty) {
					localStorage.removeItem(STORAGE_KEY_USER);
				}
				navigate('/');
			});
	});

	return (
		<React.Fragment>
			<Top />
			<ProfileSection />
		</React.Fragment>
	);
};

export default withAuth(Profile);
