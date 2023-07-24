let buttonlogin = document.querySelector("#longin");

buttonlogin.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let Data = JSON.parse(localStorage.getItem("userData"));
  if (Data) {
    console.log(Data.Email, Data.Password);
    if (email === Data.Email && password === Data.Password) {
      alert("done");
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  } else {
    alert("No user data found. Please register first.");
    return false;
  }
});
