function reverseStr1(str){
    if (typeof str == 'string'){
        let newStr = '';
        for (let i =str.length-1; i >=0; i--){
            // console.log(str[i]);
            newStr += str[i]
         }
         console.log(str)
         console.log(newStr)
    } else{
        console.log('Only string allowed');
        
    }
                 
}


function reverseStr2(str){
    const temp = str;
    newArr = [];
    const strArr = str.split('')
    // console.log(strArr.pop());

    for (let i =strArr.length-1; i >=0; i--){
       
        newArr.push(strArr.pop())
        // console.log(strArr)
    }

    
    const result = newArr.join('')
    console.log(temp)
    console.log(result);
    
}


function reverseStr(str){
    const temp = str;
    newArr = [];
    const strArr = str.split('')
    const strLen = strArr.length-1

    for (let i =0; i <= strLen; i++){
       
        newArr.unshift(strArr.shift() )
        
    }

    
    const result = newArr.join('')
    console.log(temp)
    console.log(result);
    
}

reverseStr('python')
reverseStr('java')
reverseStr('java script')




