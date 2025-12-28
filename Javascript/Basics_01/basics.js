const var1 = 2345;
let accountId = 56;
var accountPassword = 67;
accountName = "SBI";
let accountstate;
//  console.log(`outputs are:  ${var1, accountId, accountPassword, accountName}`);
/*  to use ${}-> comma operator.  it just evaluates each expression insider which is the last one, so to use we gotta use 
separate ${} for each variable
*/
console.log(`Outputs are:  ${var1}, ${accountId}, ${accountPassword}, ${accountName}, ${accountstate}`)

console.table({var1, accountId, accountPassword, accountName, accountstate})
