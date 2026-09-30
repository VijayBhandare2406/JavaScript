const accountId = 144553;
let accoundEmail = "vijay@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

accoundEmail = "HDFC@123.com"
accountPassword = "2121211221"
accountCity = "Bengaluru"

let accountState;

console.log(accoundEmail);  

console.table([accountId, accoundEmail, accountPassword, accountCity, accountState])


// accountId = 2; const keyword changeable not allowed

/* 
Perfer not to use var 
because of issue in block scope and funcational scope

Run To Enter - node 01_basics/01_variables

Output - Give below
HDFC@123.com
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 144553         │
│ 1       │ 'HDFC@123.com' │
│ 2       │ '2121211221'   │
│ 3       │ 'Bengaluru'    │
│ 4       │ undefined      │
└─────────┴────────────────┘
*/