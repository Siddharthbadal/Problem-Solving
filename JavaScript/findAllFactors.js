const findAllFactors = (inputNumber)=>{
    let result = [1]
    if(inputNumber < 1){
        throw new Error("Input Number should be a positive number.")
    }
    for(let i=2; i<= inputNumber; i++){
        if(inputNumber % i == 0){
            result.push(i)
        }
    }
    return result
}


console.log(findAllFactors(5));
console.log(findAllFactors(4));
console.log(findAllFactors(14));
console.log(findAllFactors(35));
