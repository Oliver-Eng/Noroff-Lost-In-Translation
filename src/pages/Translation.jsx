import React, { useState } from 'react';
import withAuth from '../hoc/withAuth';
import { addTranslation } from './../sources/user';
import { useUser } from '../context/UserContext';

const Translation = () => {
	const [searchString, setSearchString] = useState("")
	const [characters, setCharacters] = useState([])
	const { user } = useUser();


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
				let old = json.translations
				old.push(searchString)

				addTranslation(user.id, old)
				setCharacters(newCharacters)
			})
		
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<input maxLength={40} onChange={handleChange}></input>
				<button>Translate</button>
			</form>
			<div>
				{characters.map((char, index) => {
					return <img key={index} width="75px" src={"/images/" + char + ".png"} alt="sign"/>
				})}
			</div>
		</React.Fragment>

	);
};

export default withAuth(Translation);
