//check if the string read the same forward and backward

function isPalindrome(s) {
	if (s.length === 1) {
		return;
	}
	const reverse = (s) => {
        if (s.length === 0) {
            return '';
        }
        //s.slice(-1) -> get the last char
        //s.slice(0,s.length - 1) -> get string w/o last char
        //recursively concat first char with the remaining
        return s.slice(-1).concat(reverse(s.slice(0, s.length - 1)));
    }

	return s === reverse(s);
}

// console.log('awesome', isPalindrome('awesome')); // false
// isPalindrome('foobar') // false
// console.log('tacocat', isPalindrome('tacocat')); // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
