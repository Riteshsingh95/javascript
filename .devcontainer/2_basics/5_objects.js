

// singleton


/*
const obj1 = {1:"one",2:"two"}
const obj2 = {3:"three",4:"four"}
const obj3 = {5:"five",6:"six"}

const obj4 = {...obj1,...obj2,...obj3}  // spred operator

console.log("obj4 is",obj4);

*/

/******************************** Object Nesting ************************/

const person = {
    details:{

    name: {
      firstName: "Ritesh",
      lastName: "Singh"
    },
    address: {
      city: "Gorakhpur",
      country: "INDIA"
    },
    hobbies: ["reading", "traveling", "sports"],

    contact:{
        email: "ritesh@gmail.com",
        phone: "9517118016"
      },
    },
  };
console.log(person.details);

// console.log( typeof person);

console.log(person);
console.log(Object.keys(person.details)); //! important , yha pe jitni keys hain wo sb array me store ho gayi hain .
console.log(Object.values(person.details)); // ye saare object k value ko show kr deta hai aur ek array mein store kr deta hai .


