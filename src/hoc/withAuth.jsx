import { Navigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { useUser } from '../context/UserContext';

// Higher order component that handles keeping track on the user being authorized
const withAuth = (Component) => (props) => {
	const { user } = useUser();

	// Check if user is in local storage, if not navigate to home screen
	if (user !== null) {
		// Even if User in storage. Get user from API, check if it is empty, push to login if it is.
		fetch('https://obe-noroff-api.herokuapp.com/translations/' + user.id).then((res) => {
			if (res.status === 404) {
				localStorage.removeItem(STORAGE_KEY_USER);
				return (window.location = '/');
			}
		});
		return <Component {...props} />;
	} else {
		return <Navigate to='/' />;
	}
};

export default withAuth;
