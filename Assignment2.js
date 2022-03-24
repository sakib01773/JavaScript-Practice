//Solve the problem with Javascript  to find a maximum between three numbers.
// var number1 = 102;
// var number2 = 202;
// var number3 = 156;
// if(number1 && number2<number3)
// {
//     console.log("Number 3 is bigger number");
// }
// else if(number1 && number3<number2)
// {
//     console.log("Number 2 is bigger number");
// }
// else
// {
//     console.log("Number 1 Is Bigger Number");
// }

//Another Way

 var number1 = 102;
 var number2 = 202;
 var number3 = 156;
 var bigger;
 if(number1>number2 && number3){
    bigger=number1;
 }
 else if(number2>number1 && number3)
 {
    bigger=number2;
 }
 else
 {
    bigger=number3;
 }
 console.log("The Bigger Number is :",bigger);