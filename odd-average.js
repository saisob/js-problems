function oddAverage (numbers){
    const oddNumber =[];
    for(const number of numbers){
        if(number % 2 ==1){
            // console.log(number); 
            oddNumber.push(number);
            
        }
    }
    // console.log(oddNumber);
    sum = 0;
    for(const number of oddNumber)
    sum = sum + number;
    // console.log(sum);
    const avg = sum / oddNumber.length;
    return avg
    
}

const avg = oddAverage([12, 11, 13, 66, 63, 37 ]);
console.log("The average number is :",avg);

