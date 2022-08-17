import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../sources/user';

const usernameConfig = {
	required: true,
	minLength: 3
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const [loading, setLoading] = useState(false);

	const onSubmit = async ({ username }) => {
		setLoading(true);
		const [error, user] = await loginUser(username);
		setLoading(false);
	};

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
			</form>
		</>
	);
};

export default LoginForm;
