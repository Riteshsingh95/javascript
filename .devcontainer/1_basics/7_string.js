/*
const name = "Ritesh"
const repocount = 2
const  age = 22
*/

// console.log(`hello my name is ${name} and my repocount is ${repocount} and i am ${age} years old`); // string interpolation.

/*string interpolation mein string k ander variables ya expressions directly insert kiye jaa sakte hain.
ye usually palceholders k sath hota hai , jisse ki run time value ko replace kiya jaa sake */

// interpolation mein kayi saare string ko joda jaata hai

const name = new String("Ritesh")
console.log(name[0]); // iska use karke hmko ye pta chalta hai ki hamare kis index pr kaun sa string ka char hai

console.log(name.charAt(4));   // issse bhi same wahi hota hai character pta krna string ka .

console.log(name.toUpperCase()); // ye UpperCase func() hai .
// UpperCase func() ka use jb hm karte hain to wo hammri original value mein change nahi krta hai .

console.log(name.length); // ye string ka lenght btata hai .

console.log(name.indexOf('s')); // ye index btata hai .

const newname = name.substring(1,5)
console.log(newname);
/* yha pe string slice aur substring mein bs itna diffrence hai ki slice negative value leta hai aur 
substring nahi leta hai */
const anothername = name.slice(-2,6)
console.log(anothername);

const newstring = "  Ritesh   "
console.log(newstring);
//ye jo trim() func hai wo extra spaces ko trim (cut) krta hai
console.log(newstring.trim());


