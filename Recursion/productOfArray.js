// write a recursion function
// that take in an array of number
// and return product of them all

function productOfArray(arr) {
	// if pass in an empty array
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
// productOfArray([1,2,3,10]) // 60
