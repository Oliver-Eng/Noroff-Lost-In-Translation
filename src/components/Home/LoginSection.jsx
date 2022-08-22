import React from 'react';
import TitleCard from './TitleCard';
import LoginForm from './LoginForm';
import './LoginSection.css';

const LoginSection = () => {
	return (
		<div className='content-container'>
			{
				<React.Fragment>
					<TitleCard />
					<LoginForm />
				</React.Fragment>
			}
		</div>
	);
};

export default LoginSection;
