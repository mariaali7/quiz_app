let home = document.querySelector("#home");
home.onclick = _ => alert("you have to register first")
// window.oncontextmenu = (e) => e.preventDefault();

let dark = document.querySelector("#darkmodebtn")
let box = document.querySelector("#box")
let photo = document.querySelector("#darkmode")
dark.onclick = function () {
    document.body.classList.toggle("darktheme");
    box.classList.toggle("boxdark")
    if(document.body.classList.contains("darkthem")){
        photo.setAttribute("src" , "sun.png");
    }
    else{
        photo.setAttribute("src" , "moon.png")
    }
}
