import React from 'react';
import { useUser } from '../../context/UserContext';
import './ProfileHistory.css';

const ProfileHistory = () => {
	const { user } = useUser();

	return (
		<React.Fragment>
			<div className='translations-container'>
				<h2 className='search-title'>Last Translations</h2>
				<div className='history-text'>
					{user.translations.map((tran, index) => {
						return (
							<div key={index}>
								{tran} <div className='line'></div>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProfileHistory;
