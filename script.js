let num1 = '';
let num2 = '';
let operator = '';
let temp = 0;
let answer = '';
let lockOperator = 0;
let displayCounter = 0;
let displayCounter2 = 0;

function getNumber(value){
    if(temp == 0 && displayCounter < 16){
        num1 += value;
        document.getElementById('display').innerHTML = num1 + " " + operator;
        displayCounter++;

        if(value == '.'){
            document.getElementById('decimal').value = '';
        }
    }
    else if(temp == 1 && displayCounter2 < 16){
        num2 += value;
        document.getElementById('display').innerHTML = num2;
        displayCounter2++;

        if(value == '.'){
            document.getElementById('decimal').value = '';
        }
    }
}

function getOperator(value){
    if(lockOperator == 0){
        num2 = '';
        operator = value;
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
        temp = 1;
        document.getElementById('decimal').value = '.';
        lockOperator = 1;
    }
}

function operate(){
    if(operator == '/'){
        if(num2 == 0){
            document.getElementById('display').innerHTML = 'bruh';
        }
        else{
            answer = num1 / num2;
            document.getElementById('display').innerHTML = answer.toFixed(8) * 1;
            lockOperator = 0;
            num1 = answer;
            document.getElementById('decimal').value = '.';
            displayCounter2 = 0;
        }
    }
    else if(operator == '*'){
        answer = num1 * num2;
        document.getElementById('display').innerHTML = answer.toFixed(8) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
        displayCounter2 = 0;
    }
    else if(operator == '-'){
        answer = num1 - num2;
        document.getElementById('display').innerHTML = answer.toFixed(8) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
        displayCounter2 = 0;
    }
    else if(operator == '+'){
        num1 = Number(num1);
        num2 = Number(num2);
        answer = num1 + num2;
        document.getElementById('display').innerHTML = answer.toFixed(8) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
        displayCounter2 = 0;
    }
}

function clearDisplay(){
    num1 = '';
    num2 = '';
    operator = '';
    temp = 0;
    answer = '';
    lockOperator = 0;
    displayCounter = 0;
    displayCounter2 = 0;

    document.getElementById('display').innerHTML = '';
}

function deleteNumber(){
    if(temp == 0){
        num1 = num1.substring(0, num1.length - 1);
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
    else if(temp == 1){
        num2 = num2.substring(0, num2.length - 1);
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
}
