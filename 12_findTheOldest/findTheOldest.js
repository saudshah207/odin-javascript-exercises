const findTheOldest = function (people) {
  return people.reduce((oldestPersonUptilNow, currentPerson) => {
    const oldestPersonDeathYear = oldestPersonUptilNow.yearOfDeath
      ? oldestPersonUptilNow.yearOfDeath
      : new Date().getFullYear();

    const maxAge = oldestPersonDeathYear - oldestPersonUptilNow.yearOfBirth,
      age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

    if (age > maxAge) return currentPerson;
    else return oldestPersonUptilNow;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
