const sumAll = function(a, b) {
    let sum = 0;

    if (typeof(a) !== "number" || typeof(b) !== "number")
    {
        return "ERROR";
    }

    if (a < 0 || b < 0)
    {
        return "ERROR";
    }
    else if (a > b)
    {
        for (let index = b; index <= a; index++) {
            sum += index;
        }

        return sum;
    }
    else
    {
        for (let index = a; index <= b; index++) {
            sum += index;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
