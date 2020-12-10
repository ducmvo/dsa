function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (i!==min) swap(arr,i,min)
	}
	return arr;
}

let arr = [8, 1, 2, 9, 3, 4, 5, 6, 7];
console.log(arr);
selectionSort(arr);
console.log(arr);
