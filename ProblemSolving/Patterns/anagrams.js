//input: str1, str2
//output: boolean
//input have space? uppercase?

const validAnagram = (s1, s2) => {
    if (s1.length != s2.length) {
        return false;
    }
    
    const frequencyCounter = (str) => {
        const result = {}
        for (let char of str) {
            result[char] = ++result[char] || 1
        }
        return result
    }

    let s1f = frequencyCounter(s1);
    let s2f = frequencyCounter(s2);
    for (const key in s1f) {
        if (s1f[key] !== s2f[key]) {
            return false
        }
    }

    return true
}

const testAnagram = (func) => {
    let isPassed = true;
    isPassed = isPassed && func('', '') === true; // true
    isPassed = isPassed && func('aaz', 'zza') === false; // false
    isPassed = isPassed && func('anagram', 'nagaram') === true; //true
    isPassed = isPassed && func('rat', 'car') === false; // false
    isPassed = isPassed && func('awesome', 'awesom') === false; // false
    isPassed = isPassed && func("qwerty", "qeywrt") === true; // true
    isPassed = isPassed && func("texttwisttime", "timetwisttext") === true // true
    isPassed = isPassed && func('hello', 'olleh') === true; // true

    return isPassed;
}

console.log(testAnagram(validAnagram));

export default validAnagram;