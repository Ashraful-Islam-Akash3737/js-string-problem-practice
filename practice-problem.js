// write a function that will take 3 numbers will return the max numbers
// using if-else
function getMax(jim, dela, chinto){
    if((jim > dela) && (jim > chinto)){
        console.log("max number is :", jim);
    }
    else if((dela > jim) && (dela > chinto)){
        console.log("max number is :", dela);
    }
    else{
        console.log("max number is :", chinto);
    }
}
getMax(70, 89, 60);
// const number = getMax(70, 89, 60);
// console.log(number);



// using math.min or math.max
console.log(Math.max(70, 89, 60));

// write a function that will take 3 parameters will return the min numbers
// using if-else
function getMin(jim, dela, chinto){
    if((jim < dela) && (jim < chinto)){
        console.log("min number is :", jim);
    }
    else if((dela < jim) && (dela < chinto)){
        console.log("min number is :", dela);
    }
    else{
        console.log("min number is :", chinto);
    }
}
getMin(70, 89, 60);



// using math.min or math.max
console.log(Math.min(70, 49, 60));
