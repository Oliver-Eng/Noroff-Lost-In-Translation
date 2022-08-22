import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { deleteTranslations, deleteUser } from '../../sources/user';
import { storageDelete, storageSave } from '../../utils/storage';
import ProfileHistory from './ProfileHistory';
import ProfileCard from './ProfileCard';
import './ProfileSection.css';

const ProfileSection = () => {
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	// Clears local storage and navigates to front page
	const logOut = () => {
		storageDelete();
		setUser(null);
		navigate('/');
	};

	// Delete translations in user object, local storage and in API
	const deleteTranslationsClick = () => {
		// Create shallow clone of user with no translations
		let temp = { ...user, translations: [] };
		// Save shallow cone to storage
		storageSave(STORAGE_KEY_USER, temp);
		// Set user state to clone
		setUser(temp);
		// Delete translations from API
		deleteTranslations(user.id);
	};

	return (
		<React.Fragment>
			<div className='content-container-profile'>
				<ProfileCard />
				<div className='button-container'>
					<button className='profile-button' onClick={logOut}>
						<p>Log Out</p>
					</button>
					<button className='profile-button' onClick={deleteTranslationsClick}>
						<p>Delete history</p>
					</button>
				</div>
				<ProfileHistory />
			</div>
		</React.Fragment>
	);
};

export default ProfileSection;
