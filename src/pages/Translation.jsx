import React, { useEffect, useState } from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Home/Top/Top';
import { storageSave } from './../utils/storage';
import '../components/Home/Section/Section.css';
import '../components/Translation/TranslationSection.css';
import { addTranslation } from './../sources/user';
import { useUser } from './../context/UserContext';
import { STORAGE_KEY_USER } from './../const/storageKeys';
import { useNavigate } from 'react-router';

const Translation = () => {
	const [searchString, setSearchString] = useState('');
	const [characters, setCharacters] = useState([]);
	const { user, setUser } = useUser();

	const navigate = useNavigate();

	// Keeps track of data in controlled component
	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	// Uses data from controlled component to call the API to save new translation
	// Initializes the showcase of a translation, and saves to localstorage
	const handleSubmit = (event) => {
		event.preventDefault();

		let strippedSearch = searchString.replace(/\W/g, ''); // Remove all non-alphanumeric characters

		let newCharacters = Array.from(strippedSearch).map((char) => char.toLowerCase());

		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)
			.then((res) => res.json())
			.then((json) => {
				let newTranslations = json.translations;
				newTranslations.push(searchString);

				storageSave(STORAGE_KEY_USER, { ...user, translations: newTranslations });
				addTranslation(user.id, newTranslations);

				setUser({ ...user, translations: newTranslations });
				setCharacters(newCharacters);
			});
	};

	useEffect(() => {	
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id)	
			.then(res => res.json())
			.then(json => {					
				let responseIsEmpty = Object.keys(json).length === 0

				if (responseIsEmpty) {					
					localStorage.removeItem(STORAGE_KEY_USER);
					navigate("/")
				}
			})
	}, [])

	return (
		<React.Fragment>
			<Top />
			<div className='content-container-translation'>
				{
					<React.Fragment>
						<form className='translation-field' onSubmit={handleSubmit}>
							<input
								maxLength={40}
								onChange={handleChange}
								className='login-input-translation'
								type='text'
								placeholder='Insert text'
							/>
							<img
								id='keyboard-image-translation'
								src='/images/logo-graphics/Keyboard.png'
								alt='keyboard'
							></img>
							<button className='submit-button-translation' type='submit'>
								<img
									id='button-image'
									src='/images/logo-graphics/Right_Arrow.png'
									alt='right_arrow'
								></img>
							</button>
						</form>

						<div className='form-box-translation'>
							{characters.map((char, index) => {
								return (
									<img
										key={index}
										width='75px'
										src={'/images/hand-signs/' + char + '.png'}
										alt='sign'
									/>
								);
							})}
						</div>
					</React.Fragment>
				}
			</div>
		</React.Fragment>
	);
};

export default withAuth(Translation);
