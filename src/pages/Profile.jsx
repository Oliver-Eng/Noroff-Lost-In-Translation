import React from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Top/Top';
import ProfileSection from '../components/Profile/ProfileSection';

const Profile = () => {
	return (
		<React.Fragment>
			<Top />
			<ProfileSection />
		</React.Fragment>
	);
};

export default withAuth(Profile);
