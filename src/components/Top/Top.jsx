import './Top.css';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router';
import React from 'react';

const Top = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const profileNavigate = () => {
		navigate('/profile');
	};

	const homeNavigate = () => {
		navigate('/');
	};

	return (
		<div className='top-bar'>
			<div onClick={homeNavigate} className='top-bar-text-container'>
				<p>Lost in Translation</p>
			</div>
			{user && (
				<div className='profile-button-container'>
					<div onClick={profileNavigate} className='top-bar-profilename-container'>
						<div>{user.username}</div>
					</div>
					<div onClick={profileNavigate} className='top-bar-profile-container'>
						<img src='/images/logo-graphics/Profile.png' alt='profileimage'></img>
					</div>
				</div>
			)}
		</div>
	);
};

export default Top;
