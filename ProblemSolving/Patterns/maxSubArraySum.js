const maxSubArraySum = (arr, num) => {
    if (arr.length <= 0) return 0;
	if (num > arr.length) {
		return null;
	}
	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	for (let i = 1; i <= arr.length - num; i++) {
		tempSum = tempSum - arr[i - 1] + arr[i + num - 1];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}
	return maxSum;
};

const testMaxSubArraySum = (maxSubArraySum) => {
	let isPassed = true;
	isPassed = isPassed && maxSubArraySum([1, 2, 3, 2, 8, 1, 5], 2) === 10; // 10
	isPassed = isPassed && maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17; // 17
	isPassed = isPassed && maxSubArraySum([4, 2, 1, 6], 1) === 6; // 6
	isPassed = isPassed && maxSubArraySum([4, 2, 1, 6, 2], 4) === 13; // 13
	isPassed = isPassed && maxSubArraySum([], 4) === 0; // 0
	return isPassed;
};

console.log(testMaxSubArraySum(maxSubArraySum));
