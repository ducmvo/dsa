## Refactoring

---

1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you user the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

```javascript
const charCount = (str) => {
	// make object to return at end
	const result = {};
	// loop over string, for each char,
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			// if char is a number/letter AND is a key in object, add 1 to count.
			if (result[char] > 0) {
				result[char]++;
				// if char is a number/letter AND is NOT a key in object add it and set value to 1.
			} else {
				result[char] = 1;
			}
			// if char is something else (space, period, etc.), don't do anything.
		}
	}
	// return object at end
	return result;
};
```
