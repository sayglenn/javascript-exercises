const findTheOldest = function(array) {
    return array.reduce((curr, next) => {
        const currPerson = getAge(curr.yearOfBirth, curr.yearOfDeath);
        const nextPerson = getAge(next.yearOfBirth, next.yearOfDeath);
        return currPerson > nextPerson ? curr : next;
    })
};

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
