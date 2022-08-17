import { createContext, useContext, useState } from 'react';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { storageRead } from '../utils/storage';

const userContext = createContext();

export const useUser = () => {
	return useContext(userContext);
};

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

	const state = {
		user,
		setUser
	};

	return <userContext.Provider value={state}>{children}</userContext.Provider>;
};

export default UserProvider;
