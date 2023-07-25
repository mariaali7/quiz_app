let a = document.getElementById("btn")
let b = document.getElementById("move")
a.onclick = function () {
    b.click();
}
let uname = document.querySelector("#name")
let exam = document.querySelector("#exame")

let datasaved = JSON.parse(localStorage.getItem("userData"));
let job = JSON.parse(localStorage.getItem("userData"))
uname.append(datasaved.Username)
exam.append(datasaved.quiztype)
