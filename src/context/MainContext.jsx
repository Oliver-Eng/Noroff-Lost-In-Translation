import UserProvider from './UserContext';

const MainContext = ({ children }) => {
	return <UserProvider>{children}</UserProvider>;
};
export default MainContext;
