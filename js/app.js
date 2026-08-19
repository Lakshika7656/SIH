console.log("AgroAssist loaded successfully");

const cropImage = document.getElementById("cropImage");
const cropPreview = document.getElementById("cropPreview");
const previewSection = document.getElementById("previewSection");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultCard = document.getElementById("resultCard");

if (cropImage) {
    cropImage.addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        // Check that selected file is an image
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            cropImage.value = "";
            return;
        }

        // Create image preview
        const reader = new FileReader();

        reader.onload = function (e) {
            cropPreview.src = e.target.result;
            previewSection.style.display = "block";
            resultCard.style.display = "none";
        };

        reader.readAsDataURL(file);
    });
}

if (analyzeBtn) {
    analyzeBtn.addEventListener("click", function () {

        if (!cropImage || !cropImage.files.length) {
            alert("Please upload a crop image first.");
            return;
        }

        resultCard.style.display = "block";

        resultCard.scrollIntoView({
            behavior: "smooth"
        });
    });
}
// ================================
// Profile - Save Details
// ================================

const saveProfileBtn = document.getElementById("saveProfileBtn");

if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", function () {

        const farmerName = document.getElementById("farmerName").value;
        const farmerPhone = document.getElementById("farmerPhone").value;
        const cropName = document.getElementById("cropName").value;
        const farmSize = document.getElementById("farmSize").value;
        const farmLocation = document.getElementById("farmLocation").value;


        // Check required details
        if (
            farmerName === "" ||
            farmerPhone === "" ||
            cropName === "" ||
            farmSize === "" ||
            farmLocation === ""
        ) {
            alert("Please fill all details.");
            return;
        }


        // Save details in browser
        localStorage.setItem("farmerName", farmerName);
        localStorage.setItem("farmerPhone", farmerPhone);
        localStorage.setItem("cropName", cropName);
        localStorage.setItem("farmSize", farmSize);
        localStorage.setItem("farmLocation", farmLocation);


        alert("Your details have been saved successfully! 🌱");

    });

}