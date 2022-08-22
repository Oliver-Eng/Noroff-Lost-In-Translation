import { STORAGE_KEY_USER } from '../const/storageKeys';

// Saves current userdata to the localstorage
export const storageSave = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

// Fetches the current userdata from the localstorage
export const storageRead = (key) => {
	const data = localStorage.getItem(key);
	if (data) {
		return JSON.parse(data);
	}
	return null;
};

export const storageDelete = () => {
	localStorage.removeItem(STORAGE_KEY_USER);
};
