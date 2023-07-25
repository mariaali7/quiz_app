passwordtex = document.querySelector('#passwordtex')
emailtex = document.querySelector('#emailtex')



let buttonlogin = document.getElementById("longin");

buttonlogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let Data = JSON.parse(localStorage.getItem("userData"));
  if (Data) {
    if (email === Data.Email && password === Data.Password) {
      console.log("ok");

      window.location.href = "../hussein/home_page.html";
      return true;
    } else {
      emailtex.classList.remove("hide")
      return false;
    }
  } else {
    passwordtex.classList.remove("hide");
    return false;
  }
});