const accountId = 546765;
let accountEmail = "shailesh@gmail.com";
var accountPassword = "123456";
accountCity = "pajjarkatti";
let accountState;

// accountId = 9; // Not allowed

console.log(accountId);

accountEmail = "sky@gmail.com";
accountPassword = "4444";
accountCity = "pratappur";

/*
Never use Var for variables
because of issues in block scope and functionoal scops
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])