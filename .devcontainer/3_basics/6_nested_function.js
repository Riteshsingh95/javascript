
/************************ nested function*************************/


function funOne() {

    const username = "Ritesh"
    // console.log(website);   // function k andar jo function hai uske varible ,
    // ko ye pehla function accsess nahi kr sakta hai.
    
    function funTwo() {
        
        const website = "youtube"
        console.log(username); // lekin yha pr funcTwo() jo hai wo apne bahar k variable ko acces kr skta hai.
        // console.log(website); 
    }

    //  console.log(website);   

    funTwo()
   
}

funOne()  // lekin funOne() aur funTwo() dono ko jb ham call karenge tabhi ye access hoga.



/**************** nesting in If condition *****************/

if (true){
    const username = "Ritesh"

    if(username === "Ritesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // error 1

}

//   console.log(username);    // error 2