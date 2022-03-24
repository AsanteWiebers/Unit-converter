// Save number to a variable in code


// When app Loads, do a calcualtion and display the result

// Round numbers to 3 decimal places

// Extra: add an input for the user to change the number
//  and automaticall recalculates values when it changers

let number1 = 20;
let meterToFeet = 3.28;
let feetToMeter = 0.3048;

let literToGallon = 0.26;
let gallonToliter = 3.7;

let kiloToPound = 45;
let poundToKilos = 45;

function lengthUnit() {
    
   document.getElementById('length-meter').textContent = number1 + " meters = " + number1 * meterToFeet;
   document.getElementById('length-foot').textContent = number1 + " feet = " + number1 * feetToMeter; 

}

function volumeUnit() {
    document.getElementById('volume-liter').textContent = number1 + " liters = " + number1 * literToGallon;
    document.getElementById('volume-gallon').textContent = number1 + " gallons = " + number1 * gallonToliter;
}

function massUnit () {
    document.getElementById('mass-kilogram').textContent = number1 + " pounds = " + number1 / kiloToPound;
    document.getElementById('mass-pound').textContent = number1 + " kilos = " + number1 * poundToKilos;
}
massUnit();
volumeUnit();
lengthUnit();
