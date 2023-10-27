function reverseWord(str) {
    const words = str.split(' ');
    console.log(words);
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        result.push(word);


       
        
    }
    console.log(result); 
    const reversed = result.join(' ');
    return reversed;

     
}
const myWords = "my name is Ashraful Islam Akash";
reverseWord(myWords);

