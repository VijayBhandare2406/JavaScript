var c = 300 // globel scopes
if (true){ // block scopes 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}  

// console.log(c);
// console.log(b);
// console.log(c);

function one(){
    const username = "Vijay"

    function two() {
        const website = "youtube"
        // console.log(username); 
    }
    // console.log(website); not accessable
    two()
}
one()

if (true) {
    const username = "Vijay"
    if(username === "Vijay"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); not accessable
}

// console.log(username); not accessable


// ************** intresting **************

console.log(addone(5));
function addone(num){
    return num + 1
}


const addtwo = function (num){
    return num + 2
}
addtwo(5)
 
