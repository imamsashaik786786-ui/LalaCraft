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
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});
// FAQ Toggle
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
// Animated Counter
const counters = document.querySelectorAll(".stat-box h2");

const animateCounters = () => {
  counters.forEach(counter => {
    const text = counter.innerText;

    if (text.includes("★") || text.includes("/")) return;

    const target = parseInt(text.replace("+", ""));
    let count = 0;
    const increment = Math.ceil(target / 60);

    const update = () => {
      count += increment;

      if (count >= target) {
        counter.innerText = target + "+";
      } else {
        counter.innerText = count + "+";
        requestAnimationFrame(update);
      }
    };

    update();
  });
};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect();
  }
});

observer.observe(statsSection);
// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
});