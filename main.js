let home = document.querySelector("#home");
home.onclick = _ => alert("you have to register first")
window.oncontextmenu = (e) => e.preventDefault();

let dark = document.querySelector("#darkmodebtn")
dark.onclick = function () {
    document.body.classList.toggle("darktheme")
}