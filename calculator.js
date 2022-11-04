function calculator(){
    console.log("Calculating...");
    //your code should be here
    let num1 = Number(prompt("enter a number"));
    let num2 = Number(prompt("enter another number"));
    console.log(num1,num2);
    let sum = num1 + num2;
    console.log(sum);
    let difference = num1 - num2;
    console.log(difference);
    let product = num1 * num2;
    console.log(product);
    let quotient = num1/num2;
    console.log(quotient);
    document.getElementById("calculations").innerHTML=`
    <h1>Calculations</h1>
    <p>${num1}+${num2} = ${sum}</p>
    <p>${num1}-${num2} = ${difference}</p>
    <p>${num1}X${num2} = ${product}</p>
    <p>${num1}/${num2} = ${quotient}</p>
    `
}

//to fixed
//Create a calculator where you:

// 1) click on a button to trigger the calculator function,

// 2) get two numbers from the prompt,

// 3) display the result of the four operations (+, -, *, /) in a specific div (getting the element by id).
