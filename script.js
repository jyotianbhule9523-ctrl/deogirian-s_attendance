// Contact form submission (demo purpose)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const msg = document.getElementById("formMsg");

    msg.style.color = "green";
    msg.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;

    this.reset();
});
