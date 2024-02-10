const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR"
    } else if (times == 0) {
        return "";
    } else {
        return word + repeatString(word, times - 1);
    }
};

// Do not edit below this line
module.exports = repeatString;
