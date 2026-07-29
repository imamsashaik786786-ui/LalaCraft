console.log("Welcome to LalaCraft");
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            form.reset();
            successMessage.style.display = "block";

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        } else {
            alert("❌ Failed to send your message.");
        }
    } catch (error) {
        alert("❌ Network error. Please try again.");
        console.error(error);
    }
});