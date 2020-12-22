function twoSum(nums, target) {
	const data = {};
	for (let i = 0; i < nums.length; i++) {
		data[nums[i]] = i;
	}
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (data.hasOwnProperty(diff) && diff !== nums[i]) {
			// console.log(data[target])
			return [data[nums[i]], data[diff]];
		}
	}
	//for sorted arr:
	// let left = 0
	// let right = nums.length -1;
	// while(left<right){
	// 	let sum = nums[left]+ nums[right]
	//     if(sum===target) return [left, right]
	//     if(sum>target) right--;
	//     else left++;
	// }
	// return;
}
