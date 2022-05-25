const add = require('./add');

describe('testing exceptional input', () => {
    test('empty numbers string is not allowed', () => {
        const input = "";
        const output = add(input);
        expect(output).toBe(0);
    });

    test('single number string is not allowed', () => {
        const input = "1";
        let output = add(input);
        expect(output).toBe('Input is NOT ok');
    });
});

describe('testing input with negative numbers', () => {

    test('negative number is not allowed', () => {
        const input = "//;\n-1;2";
        let output = add(input);
        expect(output).toBe('negatives not allowed -1');
    });

    test('multiple negative numbers are not allowed', () => {
        const input = "//;\n-1;-2//-3";
        let output = add(input);
        expect(output).toBe('negatives not allowed -1,-2,-3');
    });
});

describe('testing input with diffrent delimiters', () => {
    test('two numbers separated by commas', () => {
        const input = "1,2";
        const output = add(input);
        expect(output).toBe(3);
    });
    
    test('three numbers separated by different delimiters', () => {
        const input = "1\n2,3";
        const output = add(input);
        expect(output).toBe(6);
    });
    
    test('numbers with different group of delimiters', () => {
        const input = "//;\n1;2";
        const output = add(input);
        expect(output).toBe(3);
    });
});
