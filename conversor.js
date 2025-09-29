function convert() {
let inputValue =parseFloat(document.getElementById("inputValue").value) ;
let inputUnit = document.getElementById("inputUnit").value ;
let outputUnit = document.getElementById("outputUnit").value ;
let valueInMeters;
let outputValue;
if (inputUnit === "meters") {
valueInMeters = inputValue;
} else if (inputUnit === "kilometers") {
valueInMeters = inputValue * 1000;
} else if (inputUnit === "miles") {
valueInMeters = inputValue * 1609.34;
} else if (inputUnit === "feet") {
valueInMeters = inputValue * 0.3048;
} else {
}
if (outputUnit === "meters") {
outputValue = valueInMeters;
} else if (outputUnit === "kilometers") {
outputValue = valueInMeters / 1000;
} else if (outputUnit === "miles") {
outputValue = valueInMeters / 1609.34;
} else if (outputUnit === "feet") {
outputValue = valueInMeters / 0.3048;
} else {}
document.getElementById("result").innerText = "El resultado es " + outputValue.toFixed(2) + "" + outputUnit;
}
