const memo = [undefined,1,1]
function fib(n) {
	if (memo[n]) return memo[n];
	const res = fib(n - 1) + fib(n - 2);
	memo[n] = res;
	return res;
}
