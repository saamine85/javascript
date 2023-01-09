let temps = 170;
// && mean that all is true
// || mean that one can be true
if (temps >= 70 || temps >= 90) {
  console.log("this is true");
}
if (temps >= 70 && temps >= 90) {
  console.log("this is truly");
}
// challenge
let isGuestOneVegan = true;
let isGuestTowVegan = true;

if (isGuestTowVegan && isGuestOneVegan) {
  console.log("only offer vegan dishes");
} else if (isGuestOneVegan || isGuestTowVegan) {
  console.log("make sure to offer up some vegan options");
} else {
  console.log("offer up anything on the menu");
}
