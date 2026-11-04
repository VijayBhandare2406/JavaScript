// IIFE = Immediately Invoked Function Expression
// IIFE stands for Immediately Invoked Function Expression. 
// We use it to create a private scope for variables and avoid polluting the global scope. It executes immediately after it is defined.

// Easy way to remember:
// - Problem: Global scope pollution.
// - Solution: IIFE creates a private scope.
// - Result: The function executes immediately. 

(function chai(){
    // named iiffe
    console.log("DB CONNECTED");
})();

( (name) => {
    // unmaned iife
    console.log(`DB CONNECTED TWO ${name}`);
})("Vijay");


(function chai(){
    console.log("Vijay ABC");
})();

( () => {
    console.log("Vijay PQR");
})();