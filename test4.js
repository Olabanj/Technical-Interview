//create a function name simpleIntrest with parameters principal,Intrest rate and time 
function simpleIntrest(principal,IntrestRate,time){
    //declare a variable call formula
    let formula = (principal * IntrestRate * time)/100;
    return formula;
}
console.log(simpleIntrest(4,5,9))