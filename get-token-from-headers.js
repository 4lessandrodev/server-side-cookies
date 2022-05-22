export const getTokenFromHeader = (cookies = '') => {

	const tokenRegex = /token=.+(?=;)|token=.+(?=\s)/g;
	
	const values = cookies.split('; ');
	
	const existsToken = tokenRegex.test(cookies + ';');
	
	if (existsToken) {
		let token = '';
		values.forEach((value) => {
			if (value.startsWith('token=')) {
				token = value.slice(6);
			}
		});

		return token;
	}

	return null;

}

export default getTokenFromHeader;
