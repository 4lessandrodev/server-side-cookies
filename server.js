import http from 'http';
import decodeToken from './decode-token.js';
import generateCookieExpiration from './generate-token-expiration-date.js';
import generateToken from './generate-token.js';
import getTokenFromHeader from './get-token-from-headers.js';
import isValidToken from './verify-token.js';

const server = http.createServer((req, res) => {

	if (req.url === '/generate') {
		
		const expirationDateAsUTC = generateCookieExpiration();
		const token = generateToken();
		const data = `token=${token}; Expires=${expirationDateAsUTC}; httpOnly; Secure; SameSite=Strict; Priority=High`;
		
		res.setHeader("Set-Cookie", data);
		res.write(JSON.stringify({ token: token }));
		return res.end();
		
	}

	if (req.url === '/check') {
		
		const cookies = req.headers['cookie'];
		const token = getTokenFromHeader(cookies);

		const isValid = isValidToken(token);

		if (!isValid) {
			res.write(JSON.stringify({ data: 'expired token' }));
			return res.end();
		} 

		const data = decodeToken(token);

		res.write(JSON.stringify({ data: data }));
		return res.end();
		
	}

	res.write(JSON.stringify({
		generateToken: 'http://localhost:3000/generate',
		checkToken: 'http://localhost:3000/check'
	}));
	res.end();
});

server.listen(3000);

server.on('listening', () => console.log("Running"));
