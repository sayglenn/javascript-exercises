const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        if (num1 > num2) {
            let result = 0;
            for (let i = num2; i < num1 + 1; i++) {
                result += i;
            }
            return result;
        } else {
            let result = 0;
            for (let i = num1; i < num2 + 1; i++) {
                result += i;
            }
            return result;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
