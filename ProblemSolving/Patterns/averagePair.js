function averagePair(arr, avg) {
	arr.sort();
	let left = 0;
	let right = arr.length - 1;
	let sum = avg * 2;
	while (left < right) {
		const currentSum = arr[left] + arr[right];
		if (currentSum === sum) {
			return true;
		} else if (currentSum > sum) {
			right--;
		} else {
			left++;
		}
	}
	return false;
	// [1,2,3,4,5], 2.5 => true
}
