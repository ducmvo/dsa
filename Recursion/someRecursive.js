// function return true
// if a single value in array
// passed to callback return true

function someRecursive(arr, cb) {
	if (arr.length === 0) {
		return false;
	}
	return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 4, 6], isOdd)); // true
// someRecursive([4,6,8,9], isOdd) // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
// someRecursive([4,6,8], val => val > 10); // false
