const leapYears = function(year) {
    /*
        There are two cases in which a leap year is 
        considered a leap year:

        case 1: The year is divisible by 4
        case 2: The year is divisible by 400

        Years that are divisible by 100 but not 4 or 400 are not
        leap years.
    */

    if (year % 400 === 0)
    {
        return true;
    }
    else if (year % 100 === 0)
    {
        return false;
    }
    else if (year % 4 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
