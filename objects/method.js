// method in object is just a function inside object
// here we want to check availibility ida kan des place libre ou non
// l'element this refere to the object that declare inside kima hnaa this rahii ma3netha restaurent
//!    cest a dire ki tekteb resaurent.name hiya nefssaha ki tekteb this.name
let restaurent = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  //* el haja el mliha hna ano tu peux tacceder les propriete nta3 lóbject et teste3melhom dakhel f la fonction
  // checkAvailibility: (partysize) => {
  //   let seatLeft = this.guestCapacity - this.guestCount;
  //   return partysize <= seatLeft;
  // },

  checkAvailibility: function (partysize) {
    // console.log(this.name);
    let seatLeft = this.guestCapacity - this.guestCount;
    //1) 75-72 =3
    //2) 75 - 57 =18 and 4<=18 wish is true
    return partysize <= seatLeft; //4<=3 wish is false
    // console.log(partysize);
  },
  seatParty: function (partysize) {
    this.guestCount = this.guestCount + partysize;
    // 0+72
    console.log(this.guestCount);
    // return partysize <= seatLeft;
    // console.log();
  },
  removeParty: function (partysize) {
    this.guestCount = this.guestCount - partysize;
    //2) 72 - 15 = 57
    console.log(this.guestCount);
    // return partysize <= seatLeft;
    // console.log(partysize);
  },
};
// restaurent.checkAvailibility(4);
// console.log(statu);
restaurent.seatParty(72); // hna raddi yrouh la fonction nta3 seat we yehssebelna ch3el kayen men bnadem dkhlal we men be3d yerje3 yehsseb fonction checkavailubilty ida true or not 4 <= 75-72 wich is false
console.log(restaurent.checkAvailibility(4));
restaurent.removeParty(15); // 75-57 = 18 wish is 4 <= 18 wish is true
console.log(restaurent.checkAvailibility(4));
// revision
// method give the ability to acces the proprety of object in the function and do some calculations

let resto = {
  name: "test",
  guestCapacity: 80,
  guestCount: 0,
  checkAvailibiliti: function (partynumber) {
    // this is refer to the object
    // console.log(this);
    // console.log(partynumber);
    // return false;
    // return `this the guest capacity ${resto.guestCapacity}`;
    // return `this the guest capacity ${this.guestCapacity}`;
    let seatlefti = this.guestCapacity - this.guestCount;
    return partynumber <= seatlefti;
  },
  seatParti: function (partynumber) {
    this.guestCount = this.guestCount + partynumber;
    // let seatavi=this.guestCapacity-this
  },
  removeSeatparty: function (partynumber) {
    this.guestCount = this.guestCount - partynumber;
  },
};
resto.seatParti(77);
// let statu = resto.checkAvailibiliti(4);
console.log(resto.checkAvailibiliti(4))
resto.removeSeatparty(5);
console.log(resto.checkAvailibiliti(4))
// console.log(statu);
