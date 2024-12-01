// چشم
let eyeIcon = document.querySelector(".fa-regular");
let txtPass = document.getElementById("Password");

eyeIcon.addEventListener("click", function () {
  if (eyeIcon.getAttribute("class") == "fa-regular fa-eye") {
    eyeIcon.setAttribute("class", "fa-regular fa-eye-slash");
    txtPass.setAttribute("type", "text");
  } else {
    eyeIcon.setAttribute("class", "fa-regular fa-eye");
    txtPass.setAttribute("type", "password");
  }
});

// keypress رویداد

let msg = document.querySelector(".LoginMsg");
let userTxt = document.querySelector("#userName");

userTxt.addEventListener("keypress", () => {
  if (userTxt.value.length < 5) {
    console.log("test");

    msg.innerText = "نام نادرست";
    msg.style.color = "red";
    msg.style.visibility = "visible";
    setTimeout(() => {
        msg.style.visibility = "hidden";
      }, 1000);
  
  }
  else{
    msg.innerText = "نام درست";
    msg.style.color = "green";
    msg.style.visibility = "visible";

  }
});
