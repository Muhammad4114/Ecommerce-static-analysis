document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("response").textContent = "Form submitted!";
});
