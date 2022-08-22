import { createHeaders } from '.';

const apiUrl = process.env.REACT_APP_API_URL;

// Used on login form submit - If user exists, use it, otherwise create one.
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

// Calls the api to check if a user exists and returns the user if it does
export const checkForUser = async (username) => {
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

// Calls the API to create a user and returns the user
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

// Calls the API to add to a users list of "translations"
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

// Calls the API to remove a users list of "translations"
export const deleteTranslations = async (id) => {
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

export const deleteUser = async (id) => {
	try {
		const response = await fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
			headers: createHeaders()
		});

		if (!response.ok) {
			throw new Error('Could not delete user with id ' + id);
		}

		const data = await response.json();

		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};
