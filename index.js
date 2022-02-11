// Code your solutions in this file
const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}
wrapGifts(gifts);


function writeCards(name,eventName){
    let message=[];
    for(let n=0;n<name.length;n++){
        message.push(`Thank you, ${name[n]}, for the wonderful ${eventName} gift!`);
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