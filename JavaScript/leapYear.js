const checkLeapYear = function (year){   
    
    if (year == 1700 || year == 1800 || year ==1900){
        console.log(year, "is not a leap year.");
    } else if(year % 4 == 0 ){
        console.log(year, "is a leap year.");
    }else{
        console.log(year, "is not a leap year.");        
    }
}


// checkLeapYear(2024)
// checkLeapYear(2023)
// checkLeapYear(2020)
// checkLeapYear(2026)
// checkLeapYear(1992)
// checkLeapYear(1900)


function isLeapYear(year){
    return year % 4 ==0;
}

function isLeapYear2(year){
    return year % 4 == 0 ? true : false
}
console.log(isLeapYear(2024));
console.log(isLeapYear2(2024));
console.log(isLeapYear(2021));
console.log(isLeapYear2(2021));
