
/************** function() ****************/

/*

function addtwonum(num1,num2){      // function() with parameter.
    console.log(num1+num2);
    console.log("rrr");      
    
    
}
// addtwonum(10,33)      // function() with argument.

*/


function addtwonum(num1,num2){      // function() with parameter.
   
    let result = num1+num2     /// yha pr hm variable k through bhi hm result ko return kra sakte hain.
    return result

    // return num1+num2     /// ya fir bina variable k directly return kra sakte hain result.

}

const result=addtwonum(10,33)       // function() argument.
console.log("result:",result);