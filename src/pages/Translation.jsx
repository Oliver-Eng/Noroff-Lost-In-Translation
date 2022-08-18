import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth';

const Translation = () => {
	const [searchString, setSearchString] = useState("")
	const [characters, setCharacters] = useState([])
	const { state, setState } = useContext(MainContext);
	const { user } = useUser();


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
				<input onChange={handleChange}></input>
				<button>Translate</button>
			</form>
			<div>
				{characters.map(char => {
					return <img width="75px" src={"/images/" + char + ".png"} alt="sign"/>
				})}
			</div>
		</React.Fragment>

	);
};

export default withAuth(Translation);
