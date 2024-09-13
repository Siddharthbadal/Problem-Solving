function validateStr (inputStr){
    if (typeof inputStr !== 'string'){
        return "Only string allowed!"        
    } 
}

const isPalindromes2= function (inputStr){
    validateStr(inputStr)    
    const strLen = inputStr.length
       
    const splittedInputStr = inputStr.split('')
    // console.log(splittedInputStr);
    
    const firstTwoChar = splittedInputStr.slice(0,2)
    const lastTwoChar = splittedInputStr.slice(strLen-2)   
    
    return firstTwoChar[0] === lastTwoChar[1] && firstTwoChar[1] === lastTwoChar[0] ? true : false;
}

console.log(isPalindromes2('sidd'))
console.log(isPalindromes2('level'))
console.log(isPalindromes2("dontnod"));
console.log(isPalindromes2("dont nod"));
console.log(isPalindromes2('ufo tofu'))
// console.log("============")


const isPalindromes3 = function (inputStr){
    validateStr(inputStr)
    for(let i=0; i< inputStr.length; i++){
        if (inputStr[i] ===  inputStr[inputStr.length -1 -i]){
            return true 
        } else{

            return false
        }
    }
}

// console.log(isPalindromes3('sidd'))
// console.log(isPalindromes3('level'))
// console.log(isPalindromes3("dont nod"));
// console.log(isPalindromes3('ufo tofu'))
// console.log("============")



function isPalindrome(inputStr){
    inputStr = inputStr.toLowerCase()    
    let start = 0;
    let end = inputStr.length -1;
    for(start, end; start < end; start++, end--){
        // console.log(start, end);  
        return inputStr[start] === inputStr[end] ? true :false;      
    }
}

// console.log(isPalindrome("javascript"))
// console.log(isPalindrome('level'))
// console.log(isPalindrome("dont nod"));
// console.log(isPalindrome('Abba'))