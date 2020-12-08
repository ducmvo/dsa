function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    if (num > arr.length) {
        return null;
    }
	let maxSum = 0;
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let j = num; j < arr.length; j++) {
		tempSum = tempSum + arr[j] - arr[j - num];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 7, 4, 5, 6], 3));
