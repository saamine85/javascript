const account = {
  name: "Andrew Mead",
  expences: [],
  incomes: [],
  addExpence: function (description, amount) {
    this.expences.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.incomes.push({
      description: description,
      amount: amount,
    });
  },
  getSummary: function () {
    let totalexpence = 0;
    let totalIncome = 0;
    this.expences.forEach(function (expense) {
      totalexpence = totalexpence + expense.amount;
    });
    this.incomes.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });
    let balance = totalIncome - totalexpence;
    return `${this.name} has a balance of $${balance}. $${totalIncome} in income,$${totalexpence} in expenses`;
    // this.expences.forEach(function (expense) {
    //   totalexpence = totalexpence + expense.amount;
    // });
    // return `${this.name} has $${totalexpence} in expense`;
  },
  // let income = 0;
  // this.income = income + amount;
};
account.addExpence("rent", 950);
account.addExpence("coffe", 2);
account.addIncome("job", 1000);
console.log(account);
console.log(account.getSummary());

// expense --> description, amount
// rah tzid des objets fel array nta3 expense objet { discription: ,amount}
// addExpense --> description,amount  // add new objetc to our array expences
// getSummary --> total up all expences --> Andrew mead has $1250 in expenses
