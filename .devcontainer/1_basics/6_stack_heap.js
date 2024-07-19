
// stack (primitive)  heap (Non-primitive)


// stack
let myname = "Riteshsingh"

let anothername = myname

anothername = "Little"

console.log(anothername);
console.log(myname);


//Heap

let userOne = {
    email: "singhritesh@gmail.com",
    id: 22,

}

let userTwo = userOne

userTwo.email = "little@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);