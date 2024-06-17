const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

display.textContent = '0';
let firstNum = '';
let operator = '';
let secondNum = '';
let solution = '';



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
    display.textContent = '0';
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
            result = secondNum === 0 ? "Error" : divide(firstNum, secondNum);
            break;
        default:
            result = "Error";
    }

    return result;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === 'Del')
        {
            if (display.textContent === firstNum)
            {
                firstNum = firstNum.slice(0, -1);
                console.log(`First number: ${firstNum}`);
            }
            else if (display.textContent === secondNum)
            {
                secondNum = secondNum.slice(0, -1);
                console.log(`Second number: ${secondNum}`);
            }
            else if (display.textContent === 'Error')
            {
                clearDisplay(display);
            }

            display.textContent = display.textContent.length === 1 ? '0' : display.textContent.slice(0, -1);
            console.log(display.textContent);
                        
        }
        else if (!isNaN(value) && value !== '.')
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
            console.log(typeof num1);
            console.log(typeof num2);
            if (isNaN(num1) || isNaN(num2))
            {
                solution = 'Error';
                
            }
            else
            {
                
                console.log(num1, operator, num2);
                solution = operate(num1, operator, num2);
            }
            
            /*solution = typeof solution === 'number' ? solution = operate(num1, operator, num2).toFixed(0) : 'ERROR';*/
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
                solution = operate(num1, operator, num2).toFixed(0);
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
            
            if (!secondNum)
            {
                if (!firstNum.includes('.'))
                {
                    firstNum += value;
                    display.textContent += value;    
                }
            }
            else
            {
                if (!secondNum.includes('.'))
                {
                    secondNum += value;
                    display.textContent += value;    
                }
            }
        }
        
    });
  });



