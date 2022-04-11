function caesarCipher(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[a-z]/gi, c => cipher[alphabet.indexOf(c)])
};

module.exports = caesarCipher;