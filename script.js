const StuForm = document.getElementById("StuForm");

const ageMsg = document.getElementById("ageMsg");
const numMsg = document.getElementById("numMsg");
const login = document.getElementById("login");
const accessMsg = document.getElementById("accessMsg");
const gradeChecker= document.querySelector("#gradeChecker");
const numType = document.querySelector("#numType")
const ScoreMsg = document.getElementById("ScoreMsg")

StuForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = Number(document.getElementById("age").value);
    const name = document.getElementById("StuName").value;
   
    //Task1: Age condition
    if (age >= 18) {
        ageMsg.textContent = `${name}, You are an adult.`;
    }
    else if(age<18 && age>0) {
        ageMsg.textContent = `${name}, You are a minor.`;
    }
    else{
        ageMsg.textContent= "Please enter a correct age number."

    }

     //Task2: Number condition
    const num = Number(document.getElementById("num").value);
    if (num > 0) {
        numMsg.textContent = `${num} is a positive number.`;
    }
    else if (num === 0) {
        numMsg.textContent = "Zero";
    }
    else {
        numMsg.textContent = `${num} is a negative number.`;
    }


    // Task3: Score Condition
    const grade = Number(document.getElementById("score").value);

    if (grade>90 && grade<=100){
        gradeChecker.textContent = "You are in grade A."

    }
    else if (grade>80 && grade<=90){
        gradeChecker.textContent = "You are in grade B."
    }

    else if(grade>70 && grade<=80){
        gradeChecker.textContent = "You are in grade C."
    }

    else if(grade>60 && grade<=70){
        gradeChecker.textContent = "You are in grade D."

    }
    else if(grade>50 && grade<=60){
        gradeChecker.textContent = "You are in grade E."

    }
     else if(grade>=0 && grade<=50){
        gradeChecker.textContent = "You field ."

    }
   
     else{
        gradeChecker.textContent = "Enter a score between 0 and 100."

    }

    //Task4: Even & Odd Condition
    const EvenOdd = Number(document.getElementById("EvenOdd").value);
    if (EvenOdd%2===0){
        numType.textContent = `${EvenOdd} is an even number.`

    }
    else{
        numType.textContent = `${EvenOdd} is an odd number.`

    }

    // Task5: Login Checker Condition
    const username=document.getElementById("username").value;
    const password =document.getElementById("password").value;
    if (username === "hasausername" && password === "13572468"){
        login.textContent="Login Successfully";
        console.log(username,password)
    }

    else{
         login.textContent= "Invalid Username or Password";
         console.log("Invalid Username or Password")

    }

    // Task6: 
    let ageResult = age >= 18 ? "You are an adult" : "You are a minor";

    //task7: Access Checker
    
    const hasID = document.getElementById("hasID");
    const check_btn = document.getElementById("check_btn");
    const AGE = Number(document.getElementById("AGE").value);
    if (AGE >=18 && hasID.checked){
        accessMsg.textContent="Access Granteed"

    }
    else{
        accessMsg.textContent= "Access Denied"
    }

    
   // Task8: Student Result Checker
   const StudentName = document.getElementById("StudentName").value;
   const score = Number(document.getElementById("score").value);
   if (score>90 && score<=100){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
            Score: ${score} <br>
            Grade: A <br>
            Status: Passed`;

    }
    else if (score>80 && score<=90){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
        Score: ${score} <br>
        Grade: B <br>
        Status: Passed`
    }

    else if(score>70 && score<=80){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
        Score: ${score} <br>
        Grade: C <br>
        Status: Passed`
    }

    else if(score>60 && score<=70){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
        Score: ${score} <br>
        Grade: D <br>
        Status: Passed`

    }
    else if(score>50 && score<=60){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
        Score: ${score} <br>
        Grade: E <br>
        Status: passed`

    }
     else if(score>=0 && score<=50){
        ScoreMsg.innerHTML = `Student: ${StudentName} <br>
        Score: ${score} <br>
        Status: field`

    }
   
     else{
        ScoreMsg.textContent = "Enter a score between 0 and 100."

    }
   


   



        

});