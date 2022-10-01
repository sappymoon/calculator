let num1 = '';
let num2 = '';
let operator = '';
let temp = 0;
let answer = '';
let lockOperator = 0;

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
    if(lockOperator == 0){
        num2 = '';
        operator = value;
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
        temp = 1;
        lockOperator = 1;
    }
}

function operate(){
    if(operator == '/'){
        answer = num1 / num2;
        document.getElementById('display').innerHTML = answer;
        lockOperator = 0;
        num1 = answer;
    }
    else if(operator == '*'){
        answer = num1 * num2;
        document.getElementById('display').innerHTML = answer;
        lockOperator = 0;
        num1 = answer;
    }
    else if(operator == '-'){
        answer = num1 - num2;
        document.getElementById('display').innerHTML = answer;
        lockOperator = 0;
        num1 = answer;
    }
    else if(operator == '+'){
        num1 = Number(num1);
        num2 = Number(num2);
        answer = num1 + num2;
        document.getElementById('display').innerHTML = answer;
        lockOperator = 0;
        num1 = answer;
    }
}

function clearDisplay(){
    num1 = '';
    num2 = '';
    operator = '';
    temp = 0;

    document.getElementById('display').innerHTML = '';
}