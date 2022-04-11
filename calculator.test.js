const calculator = require('./calculator');

test('basic operations', () => {
    expect(calculator.sum(2, 2)).toBe(4);
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.multiply(5, 5)).toBe(25);
    expect(calculator.divide(10, 2)).toBe(5);
});