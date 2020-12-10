function swap(a, i1, i2) {
	const temp = a[i1];
	a[i1] = a[i2];
	a[i2] = temp;
}
function pivot(arr, start = 0, end = arr.length-1) {
	let pv = arr[start]; //input
	let swapIdx = start;
	// console.log('[ORIGINAL ARR]', arr);
	for (let i = start+1; i <= end; i++) {
		if (arr[i] < pv) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, swapIdx, start); //input
	// console.log(arr);
	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1) {
	if(left<right) {
		const pivotIdx = pivot(arr, left, right);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

// console.log(pivot([55, 10, 50, 2, 59, 53, 100]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
