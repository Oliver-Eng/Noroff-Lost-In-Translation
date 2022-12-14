import React, { useEffect } from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Top/Top';
import '../components/Translation/TranslationSection.css';
import { STORAGE_KEY_USER } from './../const/storageKeys';
import { TranslationSection } from '../components/Translation/TranslationSection';
import { useUser } from '../context/UserContext';

const Translation = () => {
	const { user } = useUser()

	useEffect(() => {		
		// Get user from API, check if it is empty, push to login if it is.
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)
			.then((res) => {
				if (res.status == 404) {					
					localStorage.removeItem(STORAGE_KEY_USER);
					window.location = "/"
				}
			})
	}, []);

	return (
		<React.Fragment>
			<Top />
			<TranslationSection />
		</React.Fragment>
	);
};

export default withAuth(Translation);
