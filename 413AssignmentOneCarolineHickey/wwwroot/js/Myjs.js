function calculate() {

    grade = ((document.getElementById("exam").value * .2) +
        (document.getElementById("quiz").value * .1) +
        (document.getElementById("assignment").value * .5) +
        (document.getElementById("project").value * .1) +
        (document.getElementById("intex").value * .1));

    Math.floor(grade);

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
    document.getElementById('percentage').innerHTML = grade;
    document.getElementById('lettergrade').innerHTML = letterGrade;
}