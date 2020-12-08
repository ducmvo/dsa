// return an array of each word capitalized
function capitalizeWords (arr) {
	if(arr.length===0){
		return []
	}
	const newArr = [arr[0].toUpperCase()]
	return newArr.concat(capitalizeWords(arr.slice(1)))
}
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']