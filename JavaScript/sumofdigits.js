const findSumOfDigits = ( num )=>{
    
    const newNum = num.toString().split('')
    let result =0;
    newNum.forEach((n)=>{
        result += parseInt(n)
    })
    return result
}
    

// console.log(findSumOfDigits(4))
// console.log(findSumOfDigits(44))
// console.log(findSumOfDigits(456))
// console.log(findSumOfDigits(4444))


function calculateSumOfDigites(inputNumber){
    // let inputNumber = inputNumber;
    let result = 0;
    // for(let i=inputNumber; i >0; i--)
    while(inputNumber > 0){
        let lastDigit = inputNumber % 10;
        inputNumber = Math.floor(inputNumber / 10);
        result += lastDigit
    }
    return result
}

console.log(calculateSumOfDigites(123456))