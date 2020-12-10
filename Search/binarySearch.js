function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	for (let i = left; i <= right; i++) {
		if (arr[i] === val) {
			return i;
		}
		let middle = Math.floor((left + right) / 2);
		if (val >= arr[middle]) {
			left = middle;
		} else if (val < arr[middle]) {
			right = middle;
		}
	}
	return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));