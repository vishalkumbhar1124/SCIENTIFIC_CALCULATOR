function myclick(a) {
    calculator.display.value += a;
}

//---------Squareroot----------
function squarert() {
    calculator.display.value = Math.pow(calculator.display.value, 1 / 2);
}

//---------Cuberoot---------
function cubert() {
    calculator.display.value = Math.pow(calculator.display.value, 1 / 3);
}

//---------Factorial---------
function facto() {
    var i, no, fact;
    fact = 1;
    no = calculator.display.value;
    for (i = 1; i <= no; i++) {
        fact = fact * i;
    }
    calculator.display.value = fact;
}

//---------Power 10---------
function tenpow() {
    calculator.display.value = Math.pow(10, calculator.display.value)
}

//---------Logarithmic---------
function fnlog() {
    calculator.display.value = Math.log(calculator.display.value) / Math.log(10);
}

//---------Trignomerty---------
function fnsin() {
    calculator.display.value = Math.sin(calculator.display.value);
}

function fncos() {
    calculator.display.value = Math.cos(calculator.display.value);
}

function fntan() {
    calculator.display.value = Math.tan(calculator.display.value);
}

//---------Percentage---------
function percentage() {
    calculator.display.value = (calculator.display.value / 100);
}

//---------Absoulte value---------
function abs() {
    calculator.display.value = Math.abs(calculator.display.value);
}

//---------Square of number---------
function square() {
    calculator.display.value = Math.pow(calculator.display.value, 2);
}

//---------cube of number---------
function cube() {
    calculator.display.value = Math.pow(calculator.display.value, 3);
}

//---------Exponential---------
function exp() {
    calculator.display.value = Math.exp(calculator.display.value);
}

//---------AC: All Clear---------
function ac() {
    calculator.display.value = "";
}

//---------C: Clear---------
function c() {
    calculator.display.value = "";
}

//---------Delete last number---------
function backspace() {
    var prevalue = calculator.display.value;
    calculator.display.value = prevalue.substr(0, prevalue.length - 1);
}

//---------Equals to---------
function equalto() {
    calculator.display.value = eval(calculator.display.value);
}

