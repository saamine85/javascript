let myAccount = {
  name: "sadi",
  expences: 0,
  income: 0,
};
// hna parametre elli yrepresenti notre objet myAccount
// houwa account naccediw les parametre be dot notation we nbedlo
//les acracteristique de lobjet
// apres nmedo une valeur pour le amount pour voir le nouveau objet

// assign another proprity
let otherAccount = myAccount;
otherAccount.income = 2500;
otherAccount = {};// tu peux donc changer les vleurs mais pas les propriéte 
const addExpence = (account, amount) => {
  account.expences = account.expences + amount;
  // hna account yeddi reference de propriete men myaccount bessah locan eddirlo ressign
  // account = {}; // declarih objet vide hna rah yreje3 vide bessah
  // ma ydirch changement fel object lewel myAccount
  // par contre lokan tbedel les propriete a lexterieur des parametre rah yetbedel lobjet
  // exemple 1
  console.log(account);
};
addExpence(myAccount, 2.5);
console.log(myAccount);
console.log(otherAccount);
