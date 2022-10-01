let num1 = '';
let num2 = '';
let operator = '';
let temp = 0;

function getNumber(value){
    if(temp == 0){
        num1 += value;
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
    else if(temp == 1){
        num2 += value;
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
}

function getOperator(value){
    operator = value;
    document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    temp = 1;
}