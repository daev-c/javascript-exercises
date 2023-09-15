const removeFromArray = function(arr, ...args) {
    for (let index = 0; index < args.length; index++) {
        arr = arr.filter(item => item !== args[index])
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
