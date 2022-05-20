function getNumbersFromString(numberString){

    var numbers = numberString.match(/-?\d+/g).map(Number);
    return numbers;
}

let add_nos = (numbers) => {
    if (!numbers) return 0;
    let numbersList = getNumbersFromString(numbers);
    if (numbersList.length == 1)
        throw new Error('Input is NOT ok')
    let res = 0;
    let negatives = []
    numbersList.forEach(n=>{
        if(n < 0) negatives.push(n)
        res+=n;
    });
    if (negatives.length) {
        throw new Error('negatives not allowed ' + negatives.join(','));
    }
    return res;
}
module.exports = add_nos