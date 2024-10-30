// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Example of form validation or interaction feedback
    const form = document.getElementById('enquiry-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Your enquiry has been submitted!');
            form.reset(); // Clear the form after submission
        });
    }
});
