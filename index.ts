import { question } from "readline-sync";

//create a main function that calls commands in the command line
//create a function that checks the input
//create a function that  computes the given input

type Operator = '*' | '+' | '-' | '/'

function main(): void {
  const firstString: string = question('Enter first number: \n')
  const operator: string = question('Enter operator: \n')
  const secondString: string = question('Enter second number: \n')
  const validInput:boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString)

  if (validInput){

    const firstNum: number = parseInt(firstString)
    const secondNum: number = parseInt(secondString)
    const result = calculate(firstNum, operator as Operator, secondNum)
    console.log(result);
    


  }else{
    console.log('\n Enter a valid input\n')
    main()
  }
  
}

function isNumber(str:string): boolean {
  const maybeNum = parseInt(str)
  const isNum: boolean  = !isNaN(maybeNum)
  return isNum
}

function calculate(firstNum:number, operator: Operator, secondNum: number  ) {
  if (operator === '*'){
    return firstNum * secondNum
  }  if (operator === '/'){
    return firstNum / secondNum
  }  if (operator === '+'){
    return firstNum + secondNum
  }  if (operator === '-'){
    return firstNum - secondNum
  }
}

function isOperator(operator:string):boolean {
  if(operator === '*' || operator ==='/'|| operator ==='+' || operator ==='-') {
   return true
 } else
 return false
}

main()