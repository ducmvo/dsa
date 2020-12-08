// write a function take in n return the nth number in fibonacci
// fibonacci 1 1 2 3 5 8 13 21

// function fib(n) {
// 	if (n < 1) {
// 		return;
// 	}
// 	let previous = 1;
// 	let current = 1;
// 	(function helper(n) {
// 		if (n <= 2) {
// 			return;
// 		}
// 		let temp = current;
// 		current += previous;
// 		previous = temp;

// 		return helper(n - 1);
// 	})(n);
// 	return current;
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(4)); // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
