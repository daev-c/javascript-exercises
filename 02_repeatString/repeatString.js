const repeatString = function(word, num) {
    let string = "";

    if (word === "" || num === 0)
    {
        return ""
    }
    else if (num < 0)
    {
        return "ERROR"
    }
    else
    {
        for (let index = 0; index < num; index++) {
            string += word;
        }

        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
