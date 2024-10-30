// yearUpdater.js

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
