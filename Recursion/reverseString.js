//reverse a string

function reverse(s) {
	if (s.length === 0) {
		return '';
	}
	//s.slice(-1) -> get the last char
	//s.slice(0,s.length - 1) -> get string w/o last char
	//recursively concat first char with the remaining
	return s.slice(-1).concat(reverse(s.slice(0, s.length - 1)));
}

// const reverse = (s) => s.length === 0?'': s.slice(-1).concat(reverse(s.slice(0,-1)));

console.log(reverse('awesome'));
