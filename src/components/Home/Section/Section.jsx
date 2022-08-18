import React from 'react';
import TitleCard from '../TitleCard/TitleCard';
import LoginForm from '../LoginForm/LoginForm';
import './Section.css';

const Section = () => {
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

export default Section;
