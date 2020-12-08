const sameFrequency = (num1, num2) => {
    
    const frequencyCounter = (num) => {
        let result = {}
        for (let digit of num.toString()) {
            result[digit] = ++result[digit] || 1
        }
        return result
    }

    const f1 = frequencyCounter(num1)
    const f2 = frequencyCounter(num2)
    for (let key of Object.keys(f1)) {
        if (f1[key]!==f2[key]){
            return false;
        }
    }
    return true;

}

console.log(sameFrequency(143,321))