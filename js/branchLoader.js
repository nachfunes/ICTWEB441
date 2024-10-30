// branchLoader.js

document.addEventListener("DOMContentLoaded", function () {
    const branchInfoContainer = document.getElementById("branch-info");

    // Load branch data from XML
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "xml/branches.xml", true);
    xhr.onload = function () {
        if (this.status === 200) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(this.responseText, "application/xml");

            // Load branches
            const branches = xml.getElementsByTagName("branch");
            for (let i = 0; i < branches.length; i++) {
                const address = branches[i].getElementsByTagName("address")[0].textContent;
                const contact = branches[i].getElementsByTagName("contact")[0].textContent;
                const hours = branches[i].getElementsByTagName("hours")[0].textContent;
                const mapLink = branches[i].getElementsByTagName("map")[0].textContent;

                const branchItem = `
                    <div class="branch-item">
                        <h3>Branch ${i + 1}</h3>
                        <p><strong>Address:</strong> ${address}</p>
                        <p><strong>Contact:</strong> ${contact}</p>
                        <p><strong>Opening Hours:</strong> ${hours}</p>
                        <p><a href="${mapLink}" target="_blank">View on Google Maps</a></p>
                    </div>
                `;
                branchInfoContainer.innerHTML += branchItem;
            }
        }
    };
    xhr.send();
});
