function merge(arr1, arr2) {
	// const result = [];
	// let i = 0;
	// let j = 0;
	// while (i < arr1.length && j < arr2.length) {
	// 	if (arr1[i] < arr2[j]) {
	// 		result.push(arr1[i]);
	// 		i++;
	// 	} else {
	// 		result.push(arr2[j]);
	// 		j++;
	// 	}
	// }
	// while (j < arr2.length) {
	// 	result.push(arr2[j]);
	// 	j++;
	// }
	// while (i < arr1.length) {
	// 	result.push(arr1[i]);
	// 	i++;
	// }
	// return result;

	//using recursion
	if (arr1.length===0) return arr2
	if (arr2.length===0) return arr1
	const newArr = arr1[0]<arr2[0]
		?[arr1[0]].concat(merge(arr1.slice(1), arr2))
		:[arr2[0]].concat(merge(arr1, arr2.slice(1)))
	
	return newArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right)
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]))
