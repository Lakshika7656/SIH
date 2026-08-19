const form = document.getElementById("signupForm");

const password =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const strengthBar =
    document.getElementById("strengthBar");

const strengthText =
    document.getElementById("strengthText");


/* ==========================
   SHOW PASSWORD
========================== */

togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "🙈";

        } else {

            password.type = "password";

            togglePassword.textContent = "👁️";

        }

    }
);


/* ==========================
   PASSWORD STRENGTH
========================== */

password.addEventListener(
    "input",
    function () {

        const value = password.value;

        let strength = 0;

        if (value.length >= 8) {
            strength++;
        }

        if (/[A-Z]/.test(value)) {
            strength++;
        }

        if (/[0-9]/.test(value)) {
            strength++;
        }

        if (/[^A-Za-z0-9]/.test(value)) {
            strength++;
        }


        strengthBar.style.width =
            (strength * 25) + "%";


        if (strength <= 1) {

            strengthText.textContent =
                "Weak password";

        } else if (strength === 2) {

            strengthText.textContent =
                "Medium password";

        } else if (strength === 3) {

            strengthText.textContent =
                "Good password";

        } else {

            strengthText.textContent =
                "Strong password";

        }

    }
);


/* ==========================
   SIGNUP
========================== */

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const mobile =
            document.getElementById("mobile").value;


        if (mobile.length !== 10) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;
        }


        localStorage.setItem(
            "agroassistUser",
            document.getElementById("name").value
        );


        alert(
            "Account created successfully! 🌱"
        );


        window.location.href =
            "login.html";

    }
);