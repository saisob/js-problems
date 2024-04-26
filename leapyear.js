function isleapyear (year){
    if ( year % 4 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
const leapyer = isleapyear(2029);
console.log(leapyer);