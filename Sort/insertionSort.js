function insertionSort(arr){
	for (let i = 1; i<arr.length;i++){
		let currentVal = arr[i];
		let insertIndex = i;
		for (let j = i-1; j>=0 && currentVal<arr[j]; j--) {
			arr[j+1] = arr[j]
			insertIndex = j
		}
		arr[insertIndex] = currentVal;
	}
	return arr;
}


let arr = [8, 1, 2, 9, -4, 5, -6, 7, 3];
					    //   5  6  7
console.log(arr);
insertionSort(arr);
console.log(arr);
