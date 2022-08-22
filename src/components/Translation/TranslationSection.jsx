import React, { useState } from 'react';
import TranslationInput from './TranslationInput';
import TranslationOutput from './TranslationOutput';
import './TranslationSection.css';

export const TranslationSection = () => {
	const [characters, setCharacters] = useState([]);

	return (
		<React.Fragment>
			<div className='content-container-translation'>
				{
					<React.Fragment>
						<TranslationInput setCharacters={setCharacters} />
						<TranslationOutput characters={characters} />
					</React.Fragment>
				}
			</div>
		</React.Fragment>
	);
};
