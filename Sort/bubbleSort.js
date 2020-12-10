function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;
}


function bubbleSort(arr) {
	let count = 0;
	for (let i=arr.length; i>0;i--) {
		let noSwaps = true;
		for (let j=0; j<i-1;j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j,j+1);
				noSwaps = false;
			}
			count++
		}
		if(noSwaps) break;
	}
	console.log('comparation count', count)
	return arr;
}


let arr = [8,1,2,3,4,5,6,7];
console.log(arr)
bubbleSort(arr);
console.log(arr)