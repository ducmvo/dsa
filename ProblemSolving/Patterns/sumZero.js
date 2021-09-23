const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
	return;
};

const testSumZero = (func) => {
	let isPassed = true;
	isPassed =
		isPassed &&
		func([-3, -2, -1, 0, 1, 2, 3]).toString() === [-3, 3].toString(); //[-3,3]
	isPassed = isPassed && func([-2, 0, 1, 3]) === undefined; // undefined
	isPassed = isPassed && func([1, 2, 3]) === undefined; // undefined
	return isPassed;
};
console.log(testSumZero(sumZero));
