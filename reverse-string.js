// string
// function reverseString(text){
//     for (let i = 0; i < text.length; i++){
//         const string = text[i];
//         console.log(string);
//     }
// }
// const myString = "i am a good boy";
// const reserved = reverseString(myString);
// console.log(reserved);


// string reverse
function reverseString(text){
    let reverse = "";
    for (let i = text.length-1; i >= 0 ; i--){
        const string = text[i];
        reverse = reverse + string;
        console.log(string);
    }
    return reverse;
}
const myString = "i am a good boy";
const reserved = reverseString(myString);
console.log(reserved);
