function IncToFit(inc){
    fit = inc / 12;
    return fit;
}

function IncToFit(inc){
    const fit = inc / 12;
    const fitNumber = parseInt(fit);
    const inci = inc % 12;
    const result = fitNumber + " fit " + inci + " inc ";
    return result;

}

const myHight = IncToFit(66);
const shormiHight = IncToFit(63);
console.log(myHight);
console.log(shormiHight);