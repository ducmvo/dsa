## Sliding Window

_This pattern involves creating a **window** which can either be an array or number from one position to another_  
_Depending on a certain condition, the window either increases or closes (and a new window is created)_  
_Very useful for keeping track of a subset of data in an array/string etc._

---

[MAX SUB-ARRAY SUM](./maxSubArraySum.js)  
Write a function call **maxSubArraySum** which accepts an array of integers and a integer number call **n**. The funciton should calculate the **maximum** sum of n consecutive elements in the array.

```js
maxSubArraySum([1, 2, 3, 2, 8, 1, 5], 2); // 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubArraySum([4, 2, 1, 6], 1); // 6
maxSubArraySum([4, 2, 1, 6, 2], 4); // 13
maxSubArraySum([], 4); // null
```

---
[MIN SUB-ARRAY LENGTH](./minSubArrayLen.js)   
Time Complexity: **O(n)**   
Space Complexity: **O(1)**   
Write a function called **minSubArrayLen** which accepts two parameters - an array of positive integers and a positive integer.  
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

```js
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
```

---
[LONGEST SUB-STRING](./findLongestSubstring.js)  
Time Complexity: **O(n)**  
Write a function called **findLongestSubstring**, which accepts a string and returns the length of the longest substring with all distinct characters.
```js
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
```