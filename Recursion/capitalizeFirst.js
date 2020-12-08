// function take an array of string
//return new array with caplitalized first letter of each string
function capitalizeFirst(arr) {
	if (arr.length === 0) {
		return [];
	}
	const newArr = [arr[0][0].toUpperCase().concat(arr[0].slice(1))];
	return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
