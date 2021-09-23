const countUniqueValues = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	let i = 0;
	let j = 1;
	while (i < j && j < arr.length) {
		arr[i] === arr[j] ? j++ : (arr[++i] = arr[j++]);
	}
	return i + 1;
};

const testCountUniqueValues = (countUniqueValues) => {
	let isPassed = true;
	isPassed = isPassed && countUniqueValues([1,1,1,1,1,1,2]) === 2; // 2
	isPassed =
		isPassed &&
		countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7; // 7
	isPassed = isPassed && countUniqueValues([]) === 0; // 0
	isPassed = isPassed && countUniqueValues([-2, -1, -1, 0, 1]) === 4; // 4
	return isPassed;
};

console.log(testCountUniqueValues(countUniqueValues)); // true
