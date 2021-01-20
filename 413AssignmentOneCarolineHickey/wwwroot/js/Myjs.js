var submit = document.getElementById("submitbutton"); //initialize some variables
var grade = 0;
var letterGrade = '';

submit.addEventListener("click", function () {// Wait for a click then do this

    //grab the elements and their values then calculate
    //the grade according to the weights from learning suite
    grade = ((document.getElementById("exam").value * .2) +
        (document.getElementById("quiz").value * .1) +
        (document.getElementById("assignment").value * .5) +
        (document.getElementById("project").value * .1) +
        (document.getElementById("intex").value * .1));

    if (grade >= .94) {  //Decide what letter grade the student receives based on the 
        letterGrade = 'A'; //calculated grade.
    }
    else if (grade >= .9) {
        letterGrade = 'A-';
    }
    else if (grade >= .87) {
        letterGrade = 'B+';
    }
    else if (grade >= .84) {
        letterGrade = 'B';
    }
    else if (grade >= .8) {
        letterGrade = 'B-';
    }
    else if (grade >= .77) {
        letterGrade = 'C+';
    }
    else if (grade >= .74) {
        letterGrade = 'C';
    }
    else if (grade >= .7) {
        letterGrade = 'C-';
    }
    else if (grade >= .67) {
        letterGrade = 'D+';
    }
    else if (grade >= .64) {
        letterGrade = 'D';
    }
    else if (grade >= .6) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }
    //display the percentage grade and the lettergrade
    alert("Grade: " + grade + ', Letter Grade: ' + letterGrade);

})