function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(arr) {
	let result = 0;
	for (let number of arr) {
		result = Math.max(result, digitCount(number));
	}
	return result;
}

function radixSort(arr) {
	const digits = mostDigit(arr);
	for (let k = 0; k < digits; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let num of arr) {
			let digit = getDigit(num, k);
			digitBuckets[digit].push(num);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}
console.log(radixSort([2345, 0, 23, 1234, 44, 332, 232, 14123]));
