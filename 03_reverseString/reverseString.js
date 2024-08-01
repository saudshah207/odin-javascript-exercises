const reverseString = function(string) {
    let reversedString = "";
    for (let index = [...string].length - 1; index > -1; index--) {
        reversedString += [...string][index];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
