(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form-sub");
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                alert("Submit successfull.");
            } else {
                alert("Something went wrong with the submission.");
            }
        })
        .catch((error) => {
            alert("Something went wrong: " + error);
        });
}

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", submitForm);
