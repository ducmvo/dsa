// write a function take in a number,
//  return sum of adds up from 0 to that number
function recursiveRange(n) {
	if (n === 0) {
		return 0;
	}
	if (n > 0) {
		return n + recursiveRange(n - 1);
	} else {
		//pass in negative number
		//sum from that negative to 0
		return n + recursiveRange(n + 1);
	}
}
// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(10)); // 21
// recursiveRange(10) // 55
