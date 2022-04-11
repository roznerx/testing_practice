const reverseStr = require('./reverse-string');

test('the string is reversed', () => {
    expect(reverseStr('Take a look in the mirror!')).toMatch('!rorrim eht ni kool a ekaT');
});