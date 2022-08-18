import './TitleCard.css';

const TitleCard = () => {
	return (
		<div className='title-image-container'>
			<img className='title-image' src='/images/logo-graphics/Logo-Splash.png' alt='imagealt'></img>
			<span id='title'>Lost in Translation?</span>
			<span id='sub-title'>Get Started!</span>
		</div>
	);
};
export default TitleCard;
