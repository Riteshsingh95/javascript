
/********************** object handling in function() ***********************/

const user = {
    username:"Ritesh",
    price:100
}
function handleobject(anyobject) {   // function parameter
 console.log(`username is:${anyobject.username}`);
 console.log(`and the price is: ${anyobject.price}`);

 anyobject.price += 100;                       //yha pr ham price ko increase kr rahe hain
//  console.log(`new price: ${anyobject.price}`);

 anyobject.username = "little"                // yha pr hm name ko chane kr sakte hain
//  console.log(`new name:${anyobject.username}`);
}
// handleobject(user)       // function call // function argument


handleobject({
    username:"Ritesh",           /// yha pr function k andar direct object ko paas kiya gya hai
    price:200
})


const myarray= [100,200,33,400,500,555]

function returnsecondvalue(getarray) {

    return getarray[2]
}

// console.log(returnsecondvalue(myarray));             // yha pr array ko hamne variable mein paas kiya hai

console.log(returnsecondvalue([100,200,33,400,500,555]));        // aur yha pr direct paas kiya hai

