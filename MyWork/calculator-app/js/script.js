const display = document.getElementById('display--val');
const nums = document.getElementsByClassName('num');
const operators = document.getElementsByClassName('operator');
const reset = document.getElementById('reset');
const dec = document.getElementById('dec');
const del = document.getElementById('del');
let operand_a = 0, operand_b = 0, operation = '', result = '';

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', () => {
        if (display.innerHTML !== '0' && parseFloat(display.innerHTML) !== result && !isNaN(display.innerHTML)) {
            display.innerHTML += nums[i].id;
            result = '';
        } else {
            display.innerHTML = nums[i].id;
        }
    })
}

reset.addEventListener('click', () => {
    display.innerHTML = '0';
    operand_a = 0;
    operand_b = 0;
    operation = '';
    result = '';
})

dec.addEventListener('click', () => {
    let str = display.innerHTML;
    if (str.indexOf('.') == -1 && display.innerHTML !== result) {
        display.innerHTML += '.';
    }
});

del.addEventListener('click', () => {
    let digit = display.innerHTML;
    let cut = digit.length - 1;
    if (digit.length > 1) {
        digit = digit.slice(0, cut);
        display.innerHTML = digit;
    } else if (digit.length = 1) {
        display.innerHTML = '0';
    }
});

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        switch (operators[i].id) {
            case 'plus':
                {
                    operand_a = parseFloat(display.innerHTML);
                    display.innerHTML = '0';
                    operation = 'add';
                }
                break;
            case 'minus':
                {
                    operand_a = parseFloat(display.innerHTML);
                    display.innerHTML = '0';
                    operation = 'substract';
                }
                break;
            case 'divide':
                {
                    operand_a = parseFloat(display.innerHTML);
                    display.innerHTML = '0';
                    operation = 'divide';
                }
                break;
            case 'multiply':
                {
                    operand_a = parseFloat(display.innerHTML);
                    display.innerHTML = '0';
                    operation = 'multiply';
                }
                break;
            case 'equal':
                {
                    if (operand_a && !operand_b) {
                        operand_b = parseFloat(display.innerHTML);
                        result = '';
                    }
                    finalResult();
                }
                break;
            default:
                break;
        }
    });
}

function finalResult() {
    switch (operation) {
        case 'add':
            {
                result = operand_a + operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation = '';
            }
            break;
        case 'substract':
            {
                result = operand_a - operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation = '';
            }
            break;
        case 'divide':
            {
                if (operand_b !== 0) {
                    result = operand_a / operand_b;
                    display.innerHTML = result;
                    operand_a = 0;
                    operand_b = 0;
                    operation = '';
                } else {
                    display.innerHTML = 'Error - divide by zero';
                }
            }
            break;
        case 'multiply':
            {
                result = operand_a * operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation = '';
            }
            break;
        default:
            break;
    }
}