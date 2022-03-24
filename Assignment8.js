// Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
// Find out if the average grade:
// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var math = 89;
var english = 78;
var physics = 76;
var total = 0;
var Percentage = 0;

total = math + english + physics;
Percentage = total/3;
console.log(total);
console.log(Percentage);

if(Percentage >= 90){
    console.log("Grade A");
}
else if(Percentage >= 80){
    console.log("Grade B");
}
else if(Percentage >= 70){
    console.log("Grade C");
}
else if(Percentage >= 60){
    console.log("Grade D");
}
else if(Percentage >= 40){
    console.log("Grade E");
}
else{
    console.log("Grade F")
}
