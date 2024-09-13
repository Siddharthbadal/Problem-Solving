const PrintArea = (l,w) => {
    if(l <= 0 || w <=0){
        throw new RangeError("Length and width both needs to be positive numbers!")
    }
    const area = parseFloat(l * w)
    return area 
}

console.log(PrintArea(55.1, -16.7));
