let firstNum = '';
let operator = '';
let secondNum = '';

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(firstNum, operator, secondNum)
{
    let result;

    switch (operator)
    {
        case '+':
            result = sum(firstNum, operator, secondNum);
            break;
        case '-':
            result = subtract(firstNum, operator, secondNum);
            break;
        case '*':
            result = multiply(firstNum, operator, secondNum);
            break;
        case '/':
            result = divide(firstNum, operator, secondNum);
            break;
        default:
            result = "Invalid operator.";
    }

    console.log(result);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        display.textContent += " " + value;
        if (!isNaN(value) && value !== '.')
        {
            if (!operator)
            {
                firstNum += value;
                console.log(`first no: ${firstNum}`);
            }
            else
            {
                secondNum += value;
                console.log(`second no: ${secondNum}`);
            }
        }
        else if (value === 'AC')
        {
            display.textContent = '';
            firstNum = '';
            operator = '';
            secondNum = '';
            
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/')
        {
            operator += value;
            console.log(`operator: ${operator}`);
        }
    });
  });



