

/***************** Arrow Function ******************/

const user={
    username:"ritesh",
    price:200,

    welcomemassage: function() {
        console.log(`${this.username},welcome to our website`); // 'this' yahan 'user'object ko refer kar raha hai

         console.log(this);  // this keyword basically corrent context ko refer krta hai
                 
    }
}

// console.log(user.welcomemassage());
// console.log(user);

// yha pr ham username ki value ko change kr rahe hain
user.welcomemassage()   /// for "ritesh"
user.username="ram"      // yha pr username ki value ko change kiya gya hai
user.welcomemassage()    // for "ram"
user.username="raghu"    /// yha pr fir se username ki value ko change kiya gya hai
user.welcomemassage()    // for "raghu"

// console.log();  // yha pr jo global object h,ye empty{} object hoga
// aur browser k ander jo global object hota hai wo window object hota hai
