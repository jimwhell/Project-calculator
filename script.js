let firstNum = '';
let operator = '';
let secondNum = '';
let solution = '';

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

function clearDisplay(display)
{
    display.textContent = '';
    firstNum = '';
    operator = '';
    secondNum = '';

}

function operate(firstNum, operator, secondNum)
{
    let result = '';

    switch (operator)
    {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case '*':
            result = multiply(firstNum, secondNum);
            break;
        case '/':
            result = divide(firstNum, secondNum);
            break;
        default:
            result = "Invalid operator.";
    }

    return result;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (!isNaN(value) && value !== '.')
        {
            if (!operator)
            {
                firstNum += value;
                display.textContent = firstNum;
                console.log(`first no: ${firstNum}`);
                //console.log(typeof firstNum);
            }
            else 
            {
                secondNum += value;
                console.log(`second no: ${secondNum}`);
                display.textContent = secondNum;
            }
        }
        else if (value === '=')
        {
            const num1 = parseFloat(firstNum);
            const num2 = parseFloat(secondNum);
            console.log(num1, operator, num2);
            let solution = operate(num1, operator, num2).toFixed(2);
            console.log(parseFloat(solution));
            clearDisplay(display);
            display.textContent = solution;
        }
        else if (value === 'AC')
        {
            clearDisplay(display);
            
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/')
        {
            if (!operator)
            {
                operator += value;
            }
            else if (firstNum && operator && secondNum)
            {   
                const num1 = parseFloat(firstNum);
                const num2 = parseFloat(secondNum);
                console.log(num1, operator, num2);
                solution = operate(num1, operator, num2).toFixed(2);
                console.log(parseFloat(solution));
                clearDisplay(display);
                display.textContent = solution;
                operator += value;
                firstNum = solution;
            }
            
            console.log(`operator: ${operator}`);
        }
        else if (value === '.')
        {
            display.textContent += value;
            if (!secondNum)
            {
                firstNum += value;
            }
            else
            {
                secondNum += value;
            }
        }
        
    });
  });



