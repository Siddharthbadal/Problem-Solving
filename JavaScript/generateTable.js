const generateNumberTable = (tableOfNum, tableTillNum)=>{
    if (tableOfNum <1 || tableTillNum < 1 && 
        typeof tableOfNum != 'number' || typeof tableTillNum != 'number'
    ){
        throw new Error("Only positive numbers!")
    } 
    
   
    let result = 1;
    
    for(let i=1; i<= tableTillNum; i++){
        console.log(`${tableOfNum} * ${i} = ${tableOfNum * i}`);                
    }
}

// Part 2
// generateNumberTable(4,10)
generateNumberTable(10,10)


function generateNumberTable2(start, end){
    let result=0;
for (let i =1; i<= end; i++){
     result += start
     console.log(result)    
    }
}

// generateNumberTable2(4,10)
// generateNumberTable2(8,10)