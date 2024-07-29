
  
/*************** function without variable ******************/

console.log(addOne(10));

function addOne(num) {
      return num +1   
      
}

// console.log(addOne(10));


/***************** function in variable *******************/

// console.log(addTwo(20));   // ReferenceError: Cannot access 'addTwo' before initialization. 

const addTwo = function(num) {
      return num + 2
      
}

console.log(addTwo(20));