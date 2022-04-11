function capitalize(str) {
    let separateStr = str.toLowerCase().split(' ');
    separateStr[0] = separateStr[0].charAt(0).toUpperCase() + separateStr[0].substring(1);
    return separateStr.join(' ');
}

module.exports = capitalize;