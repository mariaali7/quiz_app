let home = document.querySelector("#home");

home.onclick = _ => alert("you have to register first")
// window.oncontextmenu = (e) => e.preventDefault();

let dark = document.querySelector("#darkmodebtn")
let box = document.getElementById("box")
let photo = document.querySelector("#darkmode")
dark.onclick = function () {
    document.body.classList.toggle("darktheme");
    // box.classList.toggle("boxdark")
    if(document.body.classList.contains("darktheme")){
        photo.src = "sun.png"
        box.style.backgroundImage = "url('bookdark.jpg')"
        console.log(box);
    }
    else{
        photo.src = "moon.png"
        // box.style.backgroundImage = "url('booklight.jpg')"
    }
}

