function collectStrings(obj) {
	const result = [];
	for (let key of Object.keys(obj)) {
		if (typeof obj[key] === 'string') {
			result.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			return result.concat(collectStrings(obj[key]));
		}
	}
	return result;
}

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz'
					}
				}
			}
		}
	}
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
