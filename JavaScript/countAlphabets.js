const countAlphabets = function(inputStr){
    let vowels = 'aeiou'
    vowels = vowels.split('')
    let vowelsCount = 0;
    let consonentsCount = 0;
    inputStr = inputStr.replaceAll(' ','').toLowerCase().split('')   
    
    for(let i = 0; i < inputStr.length; i++){
        for(let j=0; j < vowels.length; j++){            
            if(inputStr[i] === vowels[j]){
                // console.log('matched')
                vowelsCount += 1                
            } 
            consonentsCount = inputStr.length - vowelsCount
        }        
    }
    return {vowelsCount, consonentsCount};   
}
console.log('Vowels', countAlphabets('java script').vowelsCount);
console.log('Consonents', countAlphabets('java script').consonentsCount);
