## Frequency Counters

_This pattern uses objects or sets to collect values/frequencies of values_
_This can often avoid the need for nested loop O(n<sup>2</sup>) with arrays/strings._

---

[SAME FREQUENCY](./sameFrequency.js)

Write a function call same which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); //false (must be same frequency)
```

---

[ANAGRAMS](./anagrams.js)

Given two srings, write a function to determine if the second string is an anagram of the first. an anagram is a word, phrase, or name formed by rearrangeing the letter of another, such as _cinema_, formed from _iceman_

```js
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram("qwerty", "qeywrt") // true
validAnagram("texttwisttime", "timetwisttext") // true
```

[DUPLICATE CHECK](./areThereDuplicate.js)   
Time: O(n)   
Space: O(1)  
Implement a function called **areThereDuplicates** which accepts a **variable number** of arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

```js 
areThereDuplicate(1,2,3) // false
areThereDuplicate(1,2,2) // true
areThereDuplicate('a','b','c','a') // true
```
