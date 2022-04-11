const caesarCipher = require('./caesarCipher');

test('decode the cipher', () => {
    expect(caesarCipher('SERR CVMMN!')).toMatch('FREE PIZZA!');
    expect(caesarCipher('Evpx Ebyy 666')).toMatch('Rick Roll 666');
    expect(caesarCipher('Abj. V. Hfr. Cbvagf.')).toMatch('Now. I. Use. Points.');
});