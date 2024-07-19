
// stack (primitive)  heap (Non-primitive)


// stack
let myname = "Riteshsingh"

let anothername = myname

anothername = "Little"

console.log(anothername);
console.log(myname);

/* stack: inka value directly stack memory mein store hota hai . jab aap inhe ek variable se 
dusre variable mein asign krte hain , to ye ek copy bnati hain */


//Heap

let userOne = {
    email: "singhritesh@gmail.com",
    id: 22,

}

let userTwo = userOne

userTwo.email = "little@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

/* heap: inka refrence stack mein store hota hai aur actual data heap mein hota hai,jab aap inhe 
 asign krte hain , refrence copy hota hai , orignal data nahi . */