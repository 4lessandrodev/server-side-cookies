import jwt from 'jsonwebtoken';

export const isValidToken = (token) => {
	try {
		jwt.verify(token, 'secure-key');
		return true;
	} catch (error) {
		return false;
	}
}

export default isValidToken;
