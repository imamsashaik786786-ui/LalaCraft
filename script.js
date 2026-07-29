console.log("Welcome to LalaCraft");
emailjs.init({
  publicKey: "VOm0Ld8_EqxkCNnoK",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_r7ac2us",
    "template_m3ib86s",
    this
  )
  .then(function () {
    alert("✅ Thank you! Your enquiry has been sent successfully.");
    form.reset();
  })
  .catch(function (error) {
    console.log(error);
    alert("❌ Failed to send. Please try again.");
  });
});