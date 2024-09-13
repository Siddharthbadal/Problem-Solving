const findLargestNumberInArray= (numArr) =>{
    if (numArr.length !== 0){    
    let largestNum = 0;
    for (let i=0; i< numArr.length; i++){
        // console.log(numArr[i] , numArr[i+1], largestNum);

        if (largestNum < numArr[i]){           
            largestNum = numArr[i]
        }                              
    }
    return largestNum;
    } else{
        console.log("Need an array with numbers;");
        return 0;
        
        
    }
}

const arr = [5,84,56,91,2,23]
console.log(findLargestNumberInArray(arr))

const findLargestNumberInArray1= (numArr) =>{
    let largestNum = numArr[0];
    for (let i=1; i< numArr.length; i++){
        // console.log(numArr[i] , numArr[i+1], largestNum);

        if (largestNum < numArr[i]){           
            largestNum = numArr[i]
        }                              
    }
    return largestNum;

}

// const arr = []
// console.log(findLargestNumberInArray1(arr))
