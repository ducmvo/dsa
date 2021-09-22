## Solve/Simplify

---

```javascript
//Write a function which takes in a string and returns counts of each character in the string.

// alpha numeric character and lowercase

function charCount(str) {
	// make object to return at end
	const result = {};
	// loop over string, for each char,
	for (let i = o; i < str.length; i++) {
		let char = str[i];
		// if char is a number/letter AND is a key in object, add 1 to count.
		if (result[char] > 0) {
			result[char]++;
        // if char is a number/letter AND is NOT a key in object add it and set value to 1.
		} else {
			result[char] = 1;
		}
		// if char is something else (space, period, etc.), don't do anything.
	}
	// return object at end
}
```
