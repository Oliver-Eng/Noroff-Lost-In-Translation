import { createContext, useContext, useState } from 'react';

const userContext = createContext();

export const useUser = () => {
	return useContext(userContext);
};

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const state = {
		user,
		setUser
	};

	return <userContext.Provider value={state}>{children}</userContext.Provider>;
};

export default UserProvider;
