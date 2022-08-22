import React from 'react';
import './ProfileCard.css';
import { useUser } from '../../context/UserContext';

const ProfileCard = () => {
	const { user } = useUser();

	return (
		<React.Fragment>
			<div className='profile-image-container'>
				<img className='profile-image' src='/images/logo-graphics/Logo-Hello.png' alt='imagealt'></img>
				<span id='profile-title'>{user.username}</span>
			</div>
		</React.Fragment>
	);
};
export default ProfileCard;
