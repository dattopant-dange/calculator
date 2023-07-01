let input = document.getElementById('input');
let expression = '';


function appendValue(value) {
    const lastChar = expression[expression.length - 1];
    const operators = ['+', '-', '*', '/'];

    if (expression === '' && operators.includes(value)) {
        return;
    }
    if (operators.includes(lastChar) && operators.includes(value)) {
        expression = expression.slice(0, -1) + value;
    } else {
        expression += value;
    }

    input.innerText = expression;
}


function clearDisplay() {
    expression = '';
    input.innerText = '0';
    result.innerText = '';
}

function calculate() {
    try {
        let calculatedResult = eval(expression);
        result.innerText = calculatedResult;
        expression = '';
    } catch (error) {
        result.innerText = 'Error';
    }
}
function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    input.innerText = expression;
}
