let num1 = 50, num2 = 32;
let resultado;
let myStyle = "background: #0c690c;color: #fff;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

//Operador de adicion 'Suma'
resultado = num1 + num2;
console.log(`%c${num1} + ${num2} = ${resultado}`, myStyle);

//Operador de subtracion 'Resta'
resultado = num1 - num2;
console.log(`%c${num1} - ${num2} = ${resultado}`, myStyle);


//Operador de Multiplicacion
resultado = num1*num2;
console.log(`%c${num1} X ${num2} = ${resultado}`, myStyle);

//Operador de Divsion
resultado = num1/num2;
console.log(`%c${num1} / ${num2} = ${resultado}`, myStyle);

//Operador de Exponenciacion
resultado = num1**num2;
console.log(`%c${num1} ^ ${num2} = ${resultado}`, myStyle);

//Operador de Modulo o Residuo
resultado = num1%num2;
console.log(`%c${num1} % ${num2} = ${resultado}`, myStyle);


//Operador de Unario Negativo
num1 = -50;
resultado = -num1;
console.log(`%c - * - = -  ${num1} Negativo ${resultado}`, myStyle);

//Operador de Unario Positivo
num2 = -32;
resultado = +num2;
console.log(`%c - * + = -  ${num2} Negativo ${resultado}`, myStyle);

