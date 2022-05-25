const add = require('./add');

describe('testing exceptional Input', () => {
    test('empty Numbers string is not allowed', () => {
        const input = "";
        const output = add("");
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe(0);
    });

    test('single number string is not allowed', () => {
        const input = "1";
        let output;
        try {
            add(input);
        } catch (e) {
            output = e.message;
        }
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe('Input is NOT ok');
    });
});

describe('testing Input with negative numbers', () => {
    test('negative number is not allowed', () => {
        const input = "//;\n-1;2";
        let output;
        try {
            add(input);
        } catch (e) {
            output = e.message;
        }
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe('negatives not allowed -1');
    });
    test('multiple negative numbers are not allowed', () => {
        const input = "//;\n-1;-2//-3";
        let output;
        try {
            add(input);
        } catch (e) {
            output = e.message;
        }
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe('negatives not allowed -1,-2,-3');
    });
});

describe('testing diffrent delimiters numberString', () => {
    test('two numbers, separated by commas', () => {
        const input = "1,2";
        const output = add(input);
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe(3);
    });
    
    test('unknown count of numbers in numberString', () => {
        const input = "1\n2,3";
        const output = add(input);
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe(6);
    });
    
    test('different list of delimiters numberString', () => {
        const input = "//;\n1;2";
        const output = add(input);
        console.log(`Input : ${input} Output : ${output}`);
        expect(output).toBe(3);
    });
});
