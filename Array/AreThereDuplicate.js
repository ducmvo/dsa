function areThereDuplicate() {
    // function frequencyCounter(arr) {
    //     const result = {}
    //     for (let i of arr) {
    //         result[i] = ++result[i] || 1
    //     } 
    //     return result;
    // }
    // const fc = frequencyCounter(arguments);
    // for (let key in fc) {
    //     if(fc[key]>1){
    //         return true;
    //     } 
    // }
    // return false;
    return new Set(arguments).size !== arguments.length


}
console.log(areThereDuplicate(1,2,3,4,4,5,'a','b'))