const add = require('./add');

test('empty string', () => {
    expect(add("")).toBe(0);
});

test('single number', () => {
    let output;
    try {
        add("1");
    } catch (e) {
        console.log("1 " + e.message);
        output = e.message;
    }
    expect(output).toBe('Input is NOT ok');
});

test('two numbers, separated by commas', () => {
    expect(add("1,2")).toBe(3);
});

test('unknown amount of numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('negative number', () => {
    let output;
    try {
        add("//;\n-1;2");
    } catch (e) {
        console.log(e.message);
        output = e.message;
    }
    expect(output).toBe('negatives not allowed -1');
});

test('negative numbers', () => {
    let output;
    try {
        add("//;\n-1;-2//-3");
    } catch (e) {
        console.log(e.message);
        output = e.message;
    }
    expect(output).toBe('negatives not allowed -1,-2,-3');
});
