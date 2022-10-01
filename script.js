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

        if(value == '.'){
            document.getElementById('decimal').value = '';
        }
    }
    else if(temp == 1){
        num2 += value;
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;

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
            document.getElementById('display').innerHTML = answer.toFixed(3) * 1;
            lockOperator = 0;
            num1 = answer;
            document.getElementById('decimal').value = '.';
        }
    }
    else if(operator == '*'){
        answer = num1 * num2;
        document.getElementById('display').innerHTML = answer.toFixed(3) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
    }
    else if(operator == '-'){
        answer = num1 - num2;
        document.getElementById('display').innerHTML = answer.toFixed(3) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
    }
    else if(operator == '+'){
        num1 = Number(num1);
        num2 = Number(num2);
        answer = num1 + num2;
        document.getElementById('display').innerHTML = answer.toFixed(3) * 1;
        lockOperator = 0;
        num1 = answer;
        document.getElementById('decimal').value = '.';
    }
}

function clearDisplay(){
    num1 = '';
    num2 = '';
    operator = '';
    temp = 0;
    answer = '';
    lockOperator = 0;

    document.getElementById('display').innerHTML = '';
}

function deleteNumber(){
    if(temp == 0){
        num1 = num1.substring(0, num1.length - 1);
        console.log(num1);
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
    else if(temp == 1){
        num2 = num2.substring(0, num2.length - 1);
        console.log(num2);
        document.getElementById('display').innerHTML = num1 + " " + operator + " " + num2;
    }
}