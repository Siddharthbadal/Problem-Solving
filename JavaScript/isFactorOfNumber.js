const isFactorOfNumber = (number, factorNumber )=>{
    if(factorNumber < 1 || number < 1){
        throw new Error("Input Number should be a positive number.")
    }
    if (number % factorNumber === 0){
        console.log(`${factorNumber} is a factor of ${number}`)
    } else{
        console.log(`${factorNumber} is not a factor of ${number}`)
    }
    
    
}


isFactorOfNumber(35, 7)
isFactorOfNumber(35, 5)
isFactorOfNumber(35, 3)
isFactorOfNumber(14, 3)
isFactorOfNumber(14, 2)