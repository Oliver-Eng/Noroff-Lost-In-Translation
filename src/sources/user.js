import { createHeaders } from '.';

const apiUrl = process.env.REACT_APP_API_URL; // <-- insert api url here

export const loginUser = async (username) => {
	const [checkError, user] = await checkForUser(username);

	if (checkError !== null) {
		return [checkError, null];
	}

	if (user.length > 0) {
		return [null, user.pop()];
	}

	return await createUser(username);
};

const checkForUser = async (username) => {
	try {
		const response = await fetch(`${apiUrl}?username=${username}`);
		if (!response.ok) {
			throw new Error('Could not complete request.');
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

const createUser = async (username) => {
	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: createHeaders(),
			body: JSON.stringify({
				id: null,
				username,
				translations: []
			})
		});
		if (!response.ok) {
			throw new Error('Could not create user with username ' + username);
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

export const addTranslation = async (id, translations) => {
	try {

		const response = await fetch(`${apiUrl}/${id}`, {
			method: 'PATCH',
			headers: createHeaders(),
			body: JSON.stringify({
				translations: translations
			})
		});
		if (!response.ok) {
			throw new Error('could not add translation');
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

export const deleteTranslation = async (id) => {
	try {

		const response = await fetch(`${apiUrl}/${id}`, {
			method: 'PATCH',
			headers: createHeaders(),
			body: JSON.stringify({
				translations: []
			})
		});
		if (!response.ok) {
			throw new Error('could not delete translation');
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};
