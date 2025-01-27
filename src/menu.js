import dish1 from "./dish1.jpeg";
import dish2 from "./dish2.jpeg";

function loadMenu() {
    const content = document.getElementById("content");
    if (!content) return;
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const section = document.createElement("section");
    section.className = "content";

    const heading = document.createElement("h2");
    heading.textContent = "Our Seasonal Menu";

    const menuGrid = document.createElement("div");
    menuGrid.className = "menu-grid";

    const items = [
        {
            image: dish1,
            title: "Spring Harvest Salad",
            description: "Fresh greens, radishes, and a zesty lemon vinaigrette.",
        },
        {
            image: dish2,
            title: "Farmhouse Pasta",
            description: "Handmade pasta with a rich tomato-basil sauce.",
        },
    ];

    items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        menuItem.append(img, itemTitle, description);
        menuGrid.append(menuItem);
    });

    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2025 The Blooming Fork. All rights reserved.";
    footer.append(p);

    section.append(heading, menuGrid);
    content.append(section);
    content.append(footer);
}

export { loadMenu };