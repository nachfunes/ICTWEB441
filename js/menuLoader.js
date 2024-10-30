document.addEventListener("DOMContentLoaded", function () {
    const mealContainer = document.getElementById("meal-items");
    const beverageContainer = document.getElementById("beverage-items");

    // Load menu XML file using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "xml/menu.xml", true);
    xhr.onload = function () {
        if (this.status === 200) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(this.responseText, "application/xml");

            // Load meals
            const meals = xml.getElementsByTagName("meal");
            for (let i = 0; i < meals.length; i++) {
                const name = meals[i].getElementsByTagName("name")[0].textContent;
                const price = meals[i].getElementsByTagName("price")[0].textContent;
                const description = meals[i].getElementsByTagName("description")[0].textContent;
                const image = meals[i].getElementsByTagName("image")[0]?.textContent;

                const imageElement = image ? `<img src="${image}" alt="${name}">` : "";
                const mealItem = `
                    <div class="menu-item">
                        ${imageElement}
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <p><strong>Price:</strong> $${price}</p>
                    </div>
                `;
                mealContainer.innerHTML += mealItem;
            }

            // Load beverages
            const beverages = xml.getElementsByTagName("beverage");
            for (let i = 0; i < beverages.length; i++) {
                const name = beverages[i].getElementsByTagName("name")[0].textContent;
                const price = beverages[i].getElementsByTagName("price")[0].textContent;
                const image = beverages[i].getElementsByTagName("image")[0]?.textContent;

                const imageElement = image ? `<img src="${image}" alt="${name}">` : "";
                const beverageItem = `
                    <div class="menu-item">
                        ${imageElement}
                        <h3>${name}</h3>
                        <p><strong>Price:</strong> $${price}</p>
                    </div>
                `;
                beverageContainer.innerHTML += beverageItem;
            }
        }
    };
    xhr.send();
});
