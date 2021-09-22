const charCount = (str) => {
	const result = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (isAlphaNumeric(char)) result[char] = ++result[char] || 1;
	}
	console.log(result);
	return result;
};

const isAlphaNumeric = (char) => {
	const code = char.charCodeAt(0);
	if (
		(47 <= code && code <= 58) ||
		(64 <= code && code <= 91) ||
		(96 <= code && code <= 123)
	)
		return true;
	return false;
};

export default charCount;
