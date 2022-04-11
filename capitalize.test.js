const capitalize = require('./capitalize');

test('first character is capitalized', () => {
    expect(capitalize('the world is a scary place')).toMatch('The world is a scary place');
});