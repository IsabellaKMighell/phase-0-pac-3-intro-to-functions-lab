 //1
function shout(string){
    return string.toUpperCase();
} 

console.log(shout(`hello`));

//2
function whisper(string){
    return string.toLowerCase();
} 

console.log(whisper(`hello`));

//3
function logShout(){
    console.log(`hello`.toUpperCase());
} 

logShout();

//4
function logWhisper(){
    console.log(`hello`.toLowerCase());
} 

logWhisper();

//5
const love = `I love you, Grandma.`;
function sayHiToGrandma(string){
    if(string == string.toLowerCase()){
        return `I can't hear you!`;
    }
    else if(string == string.toUpperCase()){
        return `YES INDEED!`;
    }
    else if (string == love){
        return `I love you, too.`;
    }

}

console.log(sayHiToGrandma(`hello`));
console.log(sayHiToGrandma(`HELLO`));
console.log(sayHiToGrandma(`I love you, Grandma.`));
