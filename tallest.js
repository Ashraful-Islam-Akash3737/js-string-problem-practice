// find out the largest number
// function findTallest(numbers){
// let largest = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         // console.log(element);
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const tallestNumber = [180, 239, 270, 409, 169,];
// const tallestNumberIs = findTallest(tallestNumber)
// console.log("largest element is:", tallestNumberIs);



// find out the largest number
function findLowest(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const lowestNumber = [180, 239, 80, 270, 409, 169,];
const lowestNumberIs = findLowest(lowestNumber)
console.log("lowest element is:", lowestNumberIs);