const calculatePower = (base, exponent)=>{
    let result = 1;  
    for(let i = 1; i <= exponent; i++){
        result *=  base    
    }
    return result
}

console.log(calculatePower(2,10));
console.log(calculatePower(3,10));
console.log(calculatePower(4,10));
console.log(calculatePower(9,10));
