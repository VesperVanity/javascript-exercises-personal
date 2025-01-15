const repeatString = function( string, num) 
{
    let empty_string = "";
    if(num >= 0)
    {
        for(let i = 0; i < num; i++)
            {
                empty_string += string;
            }
            return empty_string;
    }
    else
    {
        empty_string = "ERROR";
        return empty_string;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
