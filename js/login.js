const loginForm =
    document.getElementById("loginForm");

const password =
    document.getElementById("password");

const showPassword =
    document.getElementById("showPassword");


/* =========================
   SHOW / HIDE PASSWORD
========================= */

showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "🙈";

    } else {

        password.type = "password";

        showPassword.textContent = "👁️";
    }

});


/* =========================
   LOGIN
========================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username")
        .value
        .trim();

    const passwordValue =
        password.value.trim();


    if (!username || !passwordValue) {

        alert("Please enter your login details.");

        return;
    }


    /*
       Temporary frontend login.

       Later Python backend
       will be connected here.
    */

    localStorage.setItem(
        "agroassistLoggedIn",
        "true"
    );


    window.location.href = "index.html";

});


/* =========================
   GOOGLE DEMO
========================= */

document
    .getElementById("googleLogin")
    .addEventListener("click", function () {

        alert(
            "Google Login will be connected with the backend."
        );

    });


/* =========================
   FORGOT PASSWORD
========================= */

document
    .getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Password reset will be connected with the Python backend."
        );

    });