let value;
const programmer = {
    name: "Furkan Yiğit",
    age: 28,
    email: "f.furkanyigit@gmail.com",
    langs: ["Python", "Javascript", "C++"],
    adress: {
        city: "Bursa",
        street: "Güneştepe"
    },
    work: function () {
        console.log("Programcı çalışıyor...");
    }
}
// bütün verileri çekelim.
value = programmer;
console.log(value);
// email verisini çekelim.
value = programmer.email;
console.log(value);
// city verisini çekelim.
value = programmer.adress.city;
console.log(value);
// work verisini çekelim.
programmer.work();

// Eğer bir object literal içinde birden fazla eleman varsa?
const team=[
    {name:"Furkan Yiğit",age:28},
    {name:"Gürkan Yiğit",age:26},
    {name:"Orhan Yiğit",age:24}
];
value=team[0];
console.log(value);
value=team[1].name;
console.log(value);