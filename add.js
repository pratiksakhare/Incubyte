const getNumbersFromString = (numberString) => {

    if(!numberString) {
        return [];
    }
    const numberRegEx = /-?\d+/g;
    var numbers = numberString.match(numberRegEx).map(Number);
    return numbers;
}

const validateInput = (numberString) => {

    if (!numberString) {
        return false;   
    }

    let numbersList = getNumbersFromString(numberString);
    
    if (numbersList.length <= 1)
        throw new Error('Input is NOT ok');

    let negativeNumbers = [];
    numbersList.forEach(number => {
        if(number < 0) {
            negativeNumbers.push(number)
        }
    });

    if (negativeNumbers.length) {
        throw new Error(`negatives not allowed ${negativeNumbers.join(',')}`);
    }
    return true;
}

const addNumbersFromNumberString = (numberString) => {

    try {
        console.log(`Input : ${numberString}`);

        let isValidInput = validateInput(numberString);
        if (!isValidInput) {
            return 0;
        }

        let numbersList = getNumbersFromString(numberString);
        let sum = numbersList.reduce((total, number) => total + number, 0);

        console.log(`Output : ${sum}`);
        return sum;
        
    } catch (exception) {
        console.log(`Error : ${exception}`);
        return exception.message;
    }
}

module.exports = addNumbersFromNumberString