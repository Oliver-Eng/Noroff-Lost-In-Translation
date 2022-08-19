import React, { useState } from 'react';
import withAuth from '../hoc/withAuth';
import { TranslationSection } from "../components/Translation/TranslationSection" 
import Top from '../components/Home/Top/Top';
import { storageSave } from './../utils/storage';
import '../components/Home/TitleCard/TitleCard.css';
import '../components/Home/LoginForm/LoginForm.css';
import '../components/Home/Section/Section.css';
import { addTranslation } from './../sources/user';
import { useUser } from './../context/UserContext';
import { STORAGE_KEY_USER } from './../const/storageKeys';

const Translation = () => {    
	const [searchString, setSearchString] = useState("")
	const [characters, setCharacters] = useState([])
	const { user, setUser } = useUser();


	const handleChange = (event) => {
		setSearchString(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let strippedSearch = searchString.replace(/\W/g, '') // Remove all non-alphanumeric characters

		let newCharacters = Array.from(strippedSearch)
			.map(char => char.toLowerCase())

		fetch("https://obe-noroff-api.herokuapp.com/translations/" + user.id)
			.then(res => res.json())
			.then(json => {
				let newTranslations = json.translations
				newTranslations.push(searchString)

				console.log({...user,  translations: newTranslations})

				storageSave(STORAGE_KEY_USER, {...user,  translations: newTranslations});
				addTranslation(user.id, newTranslations)
				setUser({...user,  translations: newTranslations})
				setCharacters(newCharacters)
			})
		
	}

	return (
		<React.Fragment>
			<Top />
			
			<div className='content-container-translation'>
				{
					<React.Fragment>
						<div className='title-image-container'>
							<form onSubmit={handleSubmit}>								
								<input 
									maxLength={40} 
									onChange={handleChange} 
									className='login-input-translation'
									type='text'
									placeholder="Insert text"
								/>{' '}
								<img id='keyboard-image-translation' src='/images/logo-graphics/Keyboard.png' alt='keyboard'></img>
								
								<button className='submit-button-translation' type='submit'>
									<img id='button-image' src='/images/logo-graphics/Right_Arrow.png' alt='right_arrow'></img>
								</button>							
							</form>
						</div>
						
						<div className='form-box-translation'>							
							{characters.map((char, index) => {
								return <img key={index} width="75px" src={"/images/hand-signs/" + char + ".png"} alt="sign"/>
							})}
						</div>
					</React.Fragment>
				}
			</div>
			<div>
			</div>
		</React.Fragment>
	)
};

export default withAuth(Translation);
