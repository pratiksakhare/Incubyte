const getNumbersFromString = (numberString) => {

    const numberRegEx = /-?\d+/g;
    var numbers = numberString.match(numberRegEx).map(Number);
    return numbers;
}

let addNumbersFromNumberString = (numbers) => {
    //Handling Empty numberString 
    if (!numbers) {
        return 0;   
    }
    let numbersList = getNumbersFromString(numbers);

    //Handling single numberString
    if (numbersList.length == 1)
        throw new Error('Input is NOT ok')

    let sum = 0;
    let negativeNumbers = []
    numbersList.forEach(n => {
        if(n < 0) {
            negativeNumbers.push(n)
        }
        sum += n;
    });

    //Handling negative numbers
    if (negativeNumbers.length) {
        throw new Error(`negatives not allowed ${negatives.join(',')}`);
    }
    return sum;
}

module.exports = addNumbersFromNumberString