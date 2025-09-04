const getTheTitles = function (books) {
  /* map() creates and returns a new array, 
    each item of which is the return value 
    of the provided callback function */
  return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
