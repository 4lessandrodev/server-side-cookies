export const generateCookieExpiration = () => {

	const expirationDate = new Date();
	const minutes = expirationDate.getMinutes() + 3;
	expirationDate.setMinutes(minutes);
	const expirationDateAsUTC = expirationDate.toUTCString();

	return expirationDateAsUTC;
}

export default generateCookieExpiration;
