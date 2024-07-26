

// function userloginmessage(username="ritesh") {  // agar user koi value nahi deta hai to ham apne parameter ko ek default value de sakte hain es tarah se,
//  aur kabhi jb user value dega to parameter ki value ko override kr dega.
    
function userloginmessage(username="ritesh") {
if (!username) {
    console.log("please enter a username");
    return
}

    return `${username} just logged in`       // yha pr hamne function() parameter ko ${} ka use karke string interpolate kiya hai
}

// console.log(userloginmessage("ritesh"));

console.log(userloginmessage("little"));  // yha pr jb argument paas karnege to ye parameter ki value ko override kr degi
// aur agar user ne koi value nahi diya to parameter ki default value return hogi jo hamne parameter k andar paas kiya hai