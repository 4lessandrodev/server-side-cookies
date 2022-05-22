import jwt from 'jsonwebtoken';

export const decodeToken = (token) => {
	const decodedToken = jwt.decode(token, {
		json: true,
		complete: true
	})?.payload;

	return decodedToken;
}

export default decodeToken;
