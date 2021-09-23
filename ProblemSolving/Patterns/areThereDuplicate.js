const areThereDuplicates = (...args) => {
	function frequencyCounter(arr) {
		const result = {};
		for (let i of arr) {
			result[i] = ++result[i] || 1;
		}
		return result;
	}
	const fc = frequencyCounter(args);
	for (let key in fc) {
		if (fc[key] > 1) return true;
	}
	return false;
};

// MULTIPLE POINTERS
const areThereDuplicates2 = (...args) => {
    // Two pointers
    args.sort();
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// ONE LINER
const areThereDuplicatesOneLine = (args) => {
    return new Set(args).size !== args.length;
}

const testAreThereDuplicates = (func) => {
	let isPassed = true;
	isPassed = isPassed && func(1, 2, 3) === false; // false
	isPassed = isPassed && func(1, 2, 2) === true; // true
	isPassed = isPassed && func('a', 'b', 'c', 'a') === true; // true
	return isPassed;
};

console.log(testAreThereDuplicates(areThereDuplicates))
console.log(testAreThereDuplicates(areThereDuplicates2))