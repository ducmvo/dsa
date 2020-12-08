//function take in an obj and convert it numbers values to string
function stringifyNumbers(obj) {
	//create newObj so the original obj is not mutated
	const newObj = Array.isArray(obj) ? [] : {};
	for (let key of Object.keys(obj)) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object') {
			newObj[key] = stringifyNumbers(obj[key]);
		}
	}
}

let obj = {
	num: 1,
	test: [1,2,3,4],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
};

console.log(stringifyNumbers(obj));
console.log(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
