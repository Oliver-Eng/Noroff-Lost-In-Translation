import React, { useEffect } from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Top/Top';
import '../components/Translation/TranslationSection.css';
import { STORAGE_KEY_USER } from './../const/storageKeys';
import { useNavigate } from 'react-router';
import { TranslationSection } from '../components/Translation/TranslationSection';
import { useUser } from '../context/UserContext';

const Translation = () => {
	const { user } = useUser();

	useEffect(() => {
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)
			.then((res) => res.json())
			.then((json) => {
				let responseIsEmpty = Object.keys(json).length === 0;

				if (responseIsEmpty) {
					localStorage.removeItem(STORAGE_KEY_USER);
					navigate('/');
				}
			});
	});
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Top />
			<TranslationSection />
		</React.Fragment>
	);
};

export default withAuth(Translation);
