const biriyanikhor = ["abul", "kabul", "sabul", "abul", "babul", "sabul"];

function noduplicate (array){
    const uniq = [];
    for(const item of array){
        if(uniq.includes(item) === false){
            uniq.push(item);
        }
        
    }
    return uniq;
}


const names = noduplicate(biriyanikhor);
console.log(names);