let value;
const programmer={
    name:"Furkan Yiğit",
    age:28,
    email:"f.furkanyigit@gmail.com",
    langs:["Python","Javascript","C++"],
    adress:{
        city:"Bursa",
        street:"Güneştepe"
    },
    work:function(){
        console.log("Programcı çalışıyor...");
    }
}
// bütün verileri çekelim.
value=programmer;
console.log(value);
// email verisini çekelim.
value=programmer.email;
console.log(value);
// city verisini çekelim.
value=programmer.adress.city;
console.log(value);
// work verisini çekelim.
programmer.work();
