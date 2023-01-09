let myAccount = {
  name: "amine",
  expencses: 0,
  income: 0,
};

const addExpense = (account, amount) => {
  account.expencses = account.expencses + amount;
};
// addExpense(myAccount, 100);
// console.log(myAccount);
const addIncome = (account, income) => {
  account.income = account.income + income;
};
// addIncome(myAccount, 1000);
// console.log(myAccount);
const reset = (account) => {
  account.expencses = 0;
  account.income = 0;
};
// reset(myAccount);
// console.log(myAccount);

const getAccountSummary = (account) => {
  let balance = account.income - account.expencses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income, $${account.expencses} in expenses.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 100);
addExpense(myAccount, 20);
getAccountSummary(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
reset(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
