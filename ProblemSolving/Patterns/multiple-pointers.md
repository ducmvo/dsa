## Multiple Pointers

_Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition_  
_**Very** efficient for solving problems with minimal space complexity as well_

---

[SUM ZERO](./sumZero.js)  
Write a function call sumZero which accepts a **sorted** array of integers. 
The funciton should find the **first** pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); //[-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

---

[COUNT UNIQUE VALUES](./countUniqueValues.js)  
Implement a function called countUniqueValues, which accepts a **sorted** array, 
and counts the unique values in the array. 
There can be negative number in the array, but it will always be sorted.

```js
countUniqueValues([1, 1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

---

[DUPLICATE CHECK](./areThereDuplicate.js)  
Time: O(n)  
Space: O(1)  
Implement a function called **areThereDuplicates** which 
accepts a **variable number** of arguments, and checks whether there are 
any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern 
OR the multiple pointers pattern.

```js
areThereDuplicate(1, 2, 3); // false
areThereDuplicate(1, 2, 2); // true
areThereDuplicate('a', 'b', 'c', 'a'); // true
```

---

[AVERAGE PAIR](./averagePair.js)  
Time: O(n)
Space: O(1)
Write a function called **averagePair**. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

```js
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```


---

[SUB-SEQUENCE STRING](./isSubsequence.js)  
Time: O(N + M)
Space: O(1)

Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, **without their order changing.**

```js
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```


