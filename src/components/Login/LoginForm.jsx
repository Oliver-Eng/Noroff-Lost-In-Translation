import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../sources/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const usernameConfig = {
	required: true,
	minLength: 3
};

const LoginForm = () => {
	//* hooks
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const { user, setUser } = useUser();

	const navigate = useNavigate();

	//* local states
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	//* side effects
	useEffect(() => {
		if (user !== null) {
			navigate('/translation');
		}
	}, [user, navigate]);

	//* event handlers
	const onSubmit = async ({ username }) => {
		setLoading(true);
		const [error, userResponse] = await loginUser(username);
		if (error !== null) {
			setApiError(error);
		}
		if (userResponse !== null) {
			storageSave(STORAGE_KEY_USER, userResponse);
			setUser(userResponse);
		}
	};

	//* render functions
	const errorMessage = (() => {
		if (!errors.username) {
			return null;
		}
		if (errors.username.type === 'required') {
			return <span>Username is required</span>;
		}
		if (errors.username.type === 'minLength') {
			return <span> Username must be at least 3 characters</span>;
		}
	})();

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<input type='text' placeholder='username' {...register('username', usernameConfig)} />
					<button type='submit' disabled={loading}>
						Continue
					</button>
					{errorMessage}
				</fieldset>
				{apiError && <p>{apiError}</p>}
			</form>
		</>
	);
};

export default LoginForm;
