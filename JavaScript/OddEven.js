// const CheckOddEven = function(num){
//    if (num == 1){
//         console.log("1 is a even number.");
        
//     } else {
//         if(num % 2 == 0){
//             console.log(num, 'is even.');        
//         } else{
//             console.log(num, 'is odd.');
            
//         }
//     }
    
// }


function CheckOddEven(num){
    return num % 2 === 0 ? `${num} is even.` : `${num} is odd.`;
}
console.log(CheckOddEven(1))