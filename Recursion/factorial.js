// write a factorial recursion function

function factorial(n) {
	//return undefined if pass in negative integer
	if (n < 0) {
		return;
	}
	if (n === 0) {
		return 1;
	}
	return factorial(n - 1) * n;
}
console.log(factorial(-1));
