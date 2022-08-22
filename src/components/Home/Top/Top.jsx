import './Top.css';
import { useUser } from '../../../context/UserContext';
import { useNavigate } from 'react-router';

const Top = () => {
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	const profileNavigate = () => {		
		navigate("/profile")
	}

	return (
		<div className='top-bar'>
			<div className='top-bar-text-container'>
				<p>Lost in Translation</p>
			</div>
			<div onClick={profileNavigate} className='top-bar-profilename-container'>				
				<div>{user.username}</div>
			</div>
			<div onClick={profileNavigate} className='top-bar-profile-container'>
				<img src="/images/logo-graphics/Profile.png" alt="profileimage"></img>
			</div>
		</div>
	);
};

export default Top;
