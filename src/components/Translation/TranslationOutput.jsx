import './TranslationOutput.css';

const TranslationOutput = ({ characters }) => {
	return (
		<div className='form-box-translation'>
			{characters.map((char, index) => {
				return <img key={index} width='75px' src={'/images/hand-signs/' + char + '.png'} alt='sign' />;
			})}
			<div className='translation-emblem'>Translation</div>
		</div>
	);
};

export default TranslationOutput;
