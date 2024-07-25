

const user = {
    name:"Ritesh",
    age:22,
    address:"Gorakhpur",
    email:"singhritesh9517118016@gmail.com",
    
}

console.log(user);

// user.email="little"

user.greeting = function(){
    console.log(`hello,${this.name}`);  // yha pr ham jb tak this.name nahi use krenege tb tak ye error show karega
}
console.log(user.greeting());
