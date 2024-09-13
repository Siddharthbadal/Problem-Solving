function calculateAvgOfNumbers(inputNumbers){
    // input number is an array
    console.log("Input array: ", inputNumbers);
    let result = 0;
    arrLenth = inputNumbers.length;
    for(let i=0; i < arrLenth; i++){
        result += inputNumbers[i]       
    }
    result = result / arrLenth    
    return result
}


console.log("Average of Input Numbers: ", calculateAvgOfNumbers([2,4,6,8,10]));
console.log("-------")
console.log("Average of Input Numbers: ", calculateAvgOfNumbers([1,2,4]));
console.log("-------")
console.log("Average of Input Numbers: ", calculateAvgOfNumbers([1,5,7,35]));

