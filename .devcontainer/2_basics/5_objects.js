

// singleton

const obj1 = {1:"one",2:"two"}
const obj2 = {3:"three",4:"four"}
const obj3 = {5:"five",6:"six"}

const obj4 = {...obj1,...obj2,...obj3}  // spred operator

console.log("obj4 is",obj4);