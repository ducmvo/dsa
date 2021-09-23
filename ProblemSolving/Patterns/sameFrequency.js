// O(n^2)
const sameFrequency = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let item of arr1) {
		const matchIndex = arr2.indexOf(item ** 2);
		if (matchIndex === -1) return false;
		else arr2.splice(matchIndex, 1);
	}
	return true;
};
// O(N)
const refactoredSameFrequency = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	const frequencyCounter1, frequencyCounter2 = {};

	for (let i = 0; i < arr1.length; i++) {
		frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
		frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) return false;
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key])
			return false;
	}

	return true;
};

const testSame = (cb) => {
	let isPassed = true;
	isPassed = isPassed && cb([1, 2, 3], [4, 1, 9]) === true; // true
	isPassed = isPassed && cb([1, 2, 3], [1, 9]) === false; // false
	isPassed = isPassed && cb([1, 2, 1], [4, 4, 1]) === false; //false (must be same frequency)
	return isPassed;
};

console.log(testSame(sameFrequency)); // true
console.log(testSame(refactoredSameFrequency));
