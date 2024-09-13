function findFactorial(num){
    let result = 1;
    if (num < 0){
       console.log("Number must be positive!"); 
    //    throw new Error("Number should be a positive integer.")       
    } else if (typeof num != 'number') {
        console.log("Only numbers allowed!");        
    }     
    else {    
        for (let i=1; i<= num; i++){
            result = result * i    
    }
        console.log(`${num}! : `,result)
}
}

findFactorial(0)
findFactorial(1)
findFactorial(4)
findFactorial(5)
findFactorial(7)
findFactorial(10)
findFactorial(-5)
findFactorial('p')