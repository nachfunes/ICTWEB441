document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
});
