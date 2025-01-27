function loadMenu() {
    const content = document.querySelector(".content");
    if (!content) return;

    const section = document.createElement("section");
    section.className = "content";

    const heading = document.createElement("h2");
    heading.textContent = "Our Seasonal Menu";

    const menuGrid = document.createElement("div");
    menuGrid.className = "menu-grid";

    const items = [
        {
            image: "https://via.placeholder.com/250",
            title: "Spring Harvest Salad",
            description: "Fresh greens, radishes, and a zesty lemon vinaigrette.",
        },
        {
            image: "https://via.placeholder.com/250",
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

    section.append(heading, menuGrid);
    content.append(section);
}

export { loadMenu };