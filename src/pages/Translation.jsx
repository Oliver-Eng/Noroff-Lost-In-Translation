import React from 'react';
import withAuth from '../hoc/withAuth';
import { TranslationSection } from "../components/Translation/TranslationSection" 

const Translation = () => {

	return (
		<>
			<TranslationSection />
		</>
	)
};

export default withAuth(Translation);
