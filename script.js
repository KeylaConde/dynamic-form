const btnsignIn = document.getElementById("sign-in"),
      btnsignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnsignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnsignUp.addEventListener("click", e => {
    formRegister.classList.remove("hide");
    formLogin.classList.add("hide");
})