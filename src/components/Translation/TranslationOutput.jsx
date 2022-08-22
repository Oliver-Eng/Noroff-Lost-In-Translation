import './TranslationOutput.css';

const TranslationOutput = ({ characters }) => {
	return (
		<div className='form-box-translation'>
			{characters.map((char, index) => {
				return <img key={index} width='75px' src={'/images/hand-signs/' + char + '.png'} alt='sign' />;
			})}
		</div>
	);
};

export default TranslationOutput;
