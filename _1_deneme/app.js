function helloWorld(){
    console.log("Merhaba Dünya");
}
function hello(){
    console.log("Merhaba");
    helloWorld();
}
// hello();

let firstName="Lorem";
function greetings(firstName=""){ // default parametresi boşluk.
    console.log(`Merhaba ${firstName}`);
}
console.log(firstName); //değişken
greetings(); //fonksiyona parametre göndermedik
greetings("Apple"); //parametre

function twoParameters(firstName="",lastName=""){
    console.log(`Merhaba ${firstName} ${lastName}`);
}
twoParameters("Furkan","Yiğit");

// 1 ile 21 arasında sayılar üretelim. (21 dahil olmasın.)
let value;
value=Math.ceil(Math.random()*20);
console.log(value);
