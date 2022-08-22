import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// Higher order component that handles keeping track on the user being authorized
const withAuth = (Component) => (props) => {
	const { user } = useUser();
	if (user !== null) {
		return <Component {...props} />;
	}
	return <Navigate to='/' />;
};

export default withAuth;
