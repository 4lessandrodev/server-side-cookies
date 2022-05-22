import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';

export const generateToken = () => {
	
	const uuid = randomUUID();

	const token = jwt.sign({ userId: uuid }, 'secure-key', {
		expiresIn: '3m'
	});

	return token;
};

export default generateToken;
