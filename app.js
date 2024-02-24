// app.js

// Display an alert when the page loads
window.onload = function() {
    alert("Hello from app.js!");
    // You can add more JavaScript code here if needed
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

