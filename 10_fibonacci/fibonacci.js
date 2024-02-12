const fibonacci = function(num) {
    const processedNum = num * 1;
    if (isNaN(processedNum)) {
        return "OOPS";
    } else if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if (num == 1 || num == 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
