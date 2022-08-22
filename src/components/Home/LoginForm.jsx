import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../sources/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import './LoginForm.css';

const usernameConfig = {
	required: true,
	minLength: 3
};

const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const { user, setUser } = useUser();

	const navigate = useNavigate();

	const onSubmit = async ({ username }) => {
		// Set loading true to disable button on screen load
		setLoading(true);
		// Get user from API or create user
		const [error, userResponse] = await loginUser(username);
		if (error !== null) {
			setApiError(error);
		}
		// Save response to local storage and set user state to response
		if (userResponse !== null) {
			storageSave(STORAGE_KEY_USER, userResponse);
			setUser(userResponse);
		}
	};

	// render error messages
	const errorMessage = (() => {
		if (!errors.username && loading === true) {
		}
		if (!errors.username) {
			return null;
		}
		if (errors.username.type === 'required') {
			return <span> ⚠ Username is required</span>;
		}
		if (errors.username.type === 'minLength') {
			return <span> ⚠ Username must be at least 3 characters</span>;
		}
	})();

	// Side effects
	useEffect(() => {
		if (user !== null) {
			navigate('/translation');
		}
	}, [user, navigate]);

	return (
		<div className='form-box'>
			<div className='form-box-error'>
				{errorMessage}
				{loading && <span>Attempting to log in...</span>}
				{apiError && <span>{apiError}</span>}
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='fieldset-login'>
					<input
						className='login-input'
						type='text'
						placeholder="What's your name?"
						{...register('username', usernameConfig)}
					/>{' '}
					<img id='keyboard-image' src='/images/logo-graphics/Keyboard.png' alt='keyboard'></img>
					<button className='submit-button' type='submit' disabled={loading}>
						<img id='button-image' src='/images/logo-graphics/Right_Arrow.png' alt='right_arrow'></img>
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default LoginForm;
