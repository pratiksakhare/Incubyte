function getNumbersFromString(numberString){
    var regx = numberString.match(/-?\d+/g).map(Number);
    return regx;
}

let Add = (numbers) => {
    if (!numbers) 
        return 0;
    let numbersList = getNumbersFromString(numbers);
    if (numbersList.length < 2)
        return 0;
    let res = 0;
    numbersList.forEach(n=>res+=n);
    return res;
}
console.log(Add('\\:1\n2'))