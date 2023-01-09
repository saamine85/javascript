let celcius = 0;
let ferneheight = (9 / 5) * celcius + 32 + " " + "F";
console.log(ferneheight);

let feir = parseInt(ferneheight);
let kalvin = `${feir + 459.67}` * 5 / 9 + ' kelvin';
console.log(kalvin);
let temperature = (5 / 9) * (feir - 32) + " " + "C";
console.log(temperature);
