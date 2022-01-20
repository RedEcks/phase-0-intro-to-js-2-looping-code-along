// Code your solutions in this file
const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}
wrapGifts(gifts);


function writeCards([name],eventName){
    let names=[];
    let message=[];
    names.push(name);
    for(let n=1;n<names.length;n++){
        message.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return message;
}
writeCards(names, eventName);

function countDown(){
    let number=10;
    while(number>=0){
        console.log(number--);
    }
}