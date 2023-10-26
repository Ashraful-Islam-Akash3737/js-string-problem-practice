// search if a word is in the string or not
const myName = "Ashraful Islam Akash";
const fullName = myName.toLowerCase();

const myString = "AkasH";
const result = myString.toLowerCase();

const output = fullName.includes(result);
console.log(output);

// includes()
let lyrics = "ami gomai. tai gomai. aijonno gomai. kinto gomai. porisese bolte chai, ami gomai";
let myItem = "GomAi";
const outputs = lyrics.toLowerCase().includes(myItem.toLowerCase());
console.log(outputs);


// indexOf()
console.log(lyrics.indexOf("tai"));


// startsWith()
const value = "Ami";
const values = value.toLowerCase();
// console.log(lyrics.startsWith(values));
// console.log(lyrics.startsWith("ami"));
// console.log(lyrics.startsWith("amin"));



// endsWith()
const property = "GomAi";
const propertys = property.toLowerCase();
console.log(lyrics.endsWith(propertys));
console.log(lyrics.endsWith("gomai"));
console.log(lyrics.endsWith("amin"));


// split()
console.log( lyrics.split("." ));


// slice()
console.log(lyrics.slice(4, 9));
console.log(lyrics.slice(0, 9));

// substring()
console.log(lyrics.substring(4, 9));
console.log(lyrics.substring(0, 9));


// trim()
console.log(lyrics.trim());


// join()
const song = [
    "tomi bondhu khala pakhi ami jeno ki",
    "bosonto kale tomay vhulte parini",
    "sada sada kala kala rong jomese sada kala",
    "hoise ami mon pagla bosonto kale"
];
const newSong = song.join("; ");
console.log(newSong);



// concat()
const concat1 = "My name is";
const concat2 = " Ashraful Islam Akash";
console.log(concat1.concat( ":" + concat2));
