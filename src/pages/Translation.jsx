import React, { useState } from 'react';
import withAuth from '../hoc/withAuth';

const Translation = () => {
	const [searchString, setSearchString] = useState("")
	const [characters, setCharacters] = useState([])


	const handleChange = (event) => {
		setSearchString(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let strippedSearch = searchString.replace(/\W/g, '') // Remove all non-alphanumeric characters

		let newCharacters = Array.from(strippedSearch)
			.map(char => char.toLowerCase())

		setCharacters(newCharacters)
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
