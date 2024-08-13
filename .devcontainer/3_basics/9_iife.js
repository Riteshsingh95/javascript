

/* IIFE (Immediately Invoked Function Expression) JavaScript ka ek,
 aisa function hota hai jo define hote hi turant execute ho jata hai. 
Iska pura naam "Immediately Invoked Function Expression" hai. */

(function namediife() {
   console.log('hello guys ye iife function hai');
    
})();

/*
Is example mein, function ko parentheses () mein wrap kiya gaya hai,
 jisse yeh ek expression ban jata hai. Aur uske baad turant () se us function ko invoke kiya gaya hai,
  jisse yeh function apne aap execute ho jata hai.
*/

/*
IIFE ka use alag-alag scopes create karne ke liye kiya jata hai, 
jisse variables global scope mein leak na karein.
 Yeh ek tarike ka encapsulation provide karta hai.
*/


(function() {
    var message = "Hello World!";
    console.log(message);
})();

// console.log(message);  // Error: message is not defined

/*
Is example mein, message variable IIFE ke andar define hai, 
isliye wo sirf usi scope mein available hai aur global scope mein access nahi kiya ja sakta.
*/

