// Highlight active menu dynamically
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Small welcome message (professional touch)
window.onload = () => {
    console.log("Smart Attendance System - Deogiri College");
};
