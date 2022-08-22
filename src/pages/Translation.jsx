import React from 'react';
import withAuth from '../hoc/withAuth';
import Top from '../components/Top/Top';
import '../components/Translation/TranslationSection.css';
import { TranslationSection } from '../components/Translation/TranslationSection';

const Translation = () => {
	return (
		<React.Fragment>
			<Top />
			<TranslationSection />
		</React.Fragment>
	);
};

export default withAuth(Translation);
