const sumAll = function(min_int, max_int) {
    let sum = min_int;
    let start_value = min_int;
    let end_value = max_int;
    if(min_int > 0 && max_int > 0 && Number.isInteger(min_int) && Number.isInteger(max_int) && min_int !== NaN && max_int !== NaN)
    {
        if(max_int < min_int)
            {
                sum = max_int;
                start_value = max_int;
                end_value = min_int;
            }
            while(start_value < end_value)
            {
                start_value++;
                sum += start_value;
            }
            return sum;
    }
    else
    {
        return "ERROR";
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
