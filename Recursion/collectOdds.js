// collect odd values in an array

const oddValues = (function collect(arr) {
	let result = [];
	if (arr.length === 0) {
		return result;
	}
	if (arr[0] % 2 !== 0) {
		result.push(arr[0]);
	}
	return result.concat(collect(arr.slice(1)));

})([1, 2, 3, 4, 5, 7]);

console.log(oddValues);
