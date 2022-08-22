const apiKey = process.env.REACT_APP_API_KEY;

// Unified header constant, across all API calls
export const createHeaders = () => {
	return {
		'Content-Type': 'application/json',
		'x-api-key': apiKey
	};
};
