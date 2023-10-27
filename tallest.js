function findTallest(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        // console.log(element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const tallestNumber = [180, 239, 270, 409, 169,];
const tallestNumberIs = findTallest(tallestNumber)
console.log("largest element is:", tallestNumberIs);