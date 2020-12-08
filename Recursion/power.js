// write a recursion function 
// that return the power of the base to the exponent
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
	if (base === 0) {
		return 0;
	}
	if (exponent === 0 || base === 1) {
		return 1;
	}
	return base * power(base, exponent - 1);
}
