function CheckSmallestNumber(x, y, z){
    if(x < y && x < z){
        console.log(x, 'is the smallest number.');        
    }
    else if(y < z && y < x){
        console.log(y, 'is the smallest number.');        
    }
    else if(z < x && z < y){
        console.log(z, 'is the smallest number.');        
    } else{

        console.log(x);
    }
     
            
}

// CheckSmallestNumber(15,17,91)
// CheckSmallestNumber(-1,-6,9)
// CheckSmallestNumber(3,3,3)
// CheckSmallestNumber(3,3,13)
// CheckSmallestNumber(13,13,3)

const CheckSmallestNumber2 = (x, y, z) =>{
    let smallest = x;
    if(y < smallest) smallest=y;
    if(z < smallest) smallest=z;

    return smallest;
}

// console.log(CheckSmallestNumber2(4,5,6))
// console.log(CheckSmallestNumber2(14,5,6))
// console.log(CheckSmallestNumber2(14,15,6))
// console.log(CheckSmallestNumber2(14,6,6))
// console.log(CheckSmallestNumber2(4,4,4))



const CheckSmallestNumber3 =  (x,y,z)=>{

    return x < y && x < z ? x : (y<z && y<x ? y: z);
}

// console.log(CheckSmallestNumber3(41,15,6))
// console.log(CheckSmallestNumber3(14,55,61))
// console.log(CheckSmallestNumber3(144,115,61))
// console.log(CheckSmallestNumber3(14,14,14))
// console.log(CheckSmallestNumber3(61,51,61))
// console.log(CheckSmallestNumber3(71,51,51))



const CheckSmallestNumber4 =(arr) => {
    for (i =0; i < arr.length; i++){
        console.log(arr[i], arr[i+1]);
        
    }
}

CheckSmallestNumber4([41,15,6])