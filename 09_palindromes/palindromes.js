const palindromes = function (string) {
  string = string.toLowerCase().split("");

  function isNotPunctuationChar(char) {
    const punctuationMarks = [" ", ",", "!", ".", ";"];
    return !punctuationMarks.includes(char);
  }

  const reversed = string.filter(isNotPunctuationChar).reverse().join("");

  string = string.filter(isNotPunctuationChar).join("");

  return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
