//  let myDate =  new Date();
//  console.log("Local Date and Time:",myDate.toLocaleString());

let myDate = new Date();
let options = { timeZone: 'Asia/Kolkata', timeZoneName: 'short' };
console.log("IST Date and Time:", myDate.toLocaleString('en-IN', options));
