let submit = document.getElementById("submitButton");

submit.addEventListener("click", function calcGPA() {


    let total = 0;
    let output = 0;
    //This is getting each part of the grade and getting them to be worth their value, 50% for assignments.
    let assignmentGrade = document.getElementById("assignment").value;
    assignmentGrade *= .001;
    assignmentGrade *= 5;
    //projects are 10% 
    let projectGrade = document.getElementById("projects").value;
    projectGrade *= .001;
    projectGrade *= 1;
    //quizzes are 10%
    let quizGrade = document.getElementById("quiz").value;
    quizGrade *= .001;
    quizGrade *= 1;
    //ecams are 20%
    let examGrade = document.getElementById("exam").value;
    examGrade *= .001;
    examGrade *= 2;
    //intex is worth 10%
    let intexGrade = document.getElementById("intex").value;
    intexGrade *= .001;
    intexGrade *= 1;
    //Exception handling making sure that each one is filled out
    if ((assignmentGrade == "") || (projectGrade == "") || (quizGrade == "") || (examGrade == "") || (intexGrade == "")) {
        alert("You must enter a percentage up to 100 for each grade!");
        
    } else {
        //this is getting the total from all the different sections.
        total = total + parseFloat(assignmentGrade) + parseFloat(projectGrade) + parseFloat(quizGrade) + parseFloat(examGrade) + parseFloat(intexGrade)
        //rounding to 2 places.
        total = total.toFixed(2);
        //makes it out of 100
        total *= 100
        //if statement to determine which letter grade to output
        if (total >= 94) {
            document.getElementById("outputLet").innerHTML = "A";
        } else if ((total >= 90) && (total < 94)) {
            document.getElementById("outputLet").innerHTML = "A-";
        } else if ((total >= 87) && (total < 90)) {
            document.getElementById("outputLet").innerHTML = "B+";
        } else if ((total >= 84) && (total < 87)) {
            document.getElementById("outputLet").innerHTML = "B";
        } else if ((total >= 80) && (total < 84)) {
            document.getElementById("outputLet").innerHTML = "B-";
        } else if ((total >= 77) && (total < 80)) {
            document.getElementById("outputLet").innerHTML = "C+";
        } else if ((total >= 74) && (total < 77)) {
            document.getElementById("outputLet").innerHTML = "C";
        } else if ((total >= 70) && (total < 74)) {
            document.getElementById("outputLet").innerHTML = "C-";
        } else if ((total >= 67) && (total < 70)) {
            document.getElementById("outputLet").innerHTML = "D+";
        } else if ((total >= 64) && (total < 67)) {
            document.getElementById("outputLet").innerHTML = "D";
        } else if ((total >= 60) && (total < 64)) {
            document.getElementById("outputLet").innerHTML = "D-";
        } else {
            document.getElementById("outputLet").innerHTML = "E";
        }

        //outputs the total grade percentage
        output = total + "%";



        document.getElementById("outputNum").innerHTML = output;
        //if total >= .94

    }
});


