const operation=prompt("chose one of this operation to calculator + - * /");
const FirstNumber=parseFloat(prompt("inter the first number"));
const SecondeNumber=parseFloat(prompt("enter the Second number"));

let calc;

if(operation == '+'){
     calc=FirstNumber + SecondeNumber;
}else if (operation=='-') {
    calc=FirstNumber - SecondeNumber;
    
} else if (operation == '*'){
     calc=FirstNumber * SecondeNumber;
} else if (operation == '/'){
     calc=FirstNumber/SecondeNumber;
}else{
    console.log("you ented wrong operation");
}

console.log(`The Result of the calculator is:${FirstNumber} ${operation} ${SecondeNumber}= ${calc}`);

document.body.innerHTML=`<h2>claculator Result</h2>
<p>${FirstNumber}${operation}${SecondeNumber} = ${calc}</p>`;