const mark=90;

let grade;

if(mark<=100 && mark>=90 ){
    grade='A+';

}else if(mark<90 && mark<=80){
    grade='A';
}else if(mark<80 && mark<=70){
    grade='B';
}
else if(mark<70 && mark<=60){
    grade='C';
}
else if(mark<60 && mark<=50){
    grade='D';
}
else{
    grade='FAIL';
}

document.write("<h1>Student Grade Evaluation</h1>");
document.write("<p>The student's mark is: <strong>" + mark + "</strong></p>");
document.write("<p>Final Result: <strong>" + grade + "</strong></p>");