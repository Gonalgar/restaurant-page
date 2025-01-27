function loadHome() {
    const content = document.querySelector(".content");
    if (!content) return;
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const hero = document.createElement("div");
    hero.className = "hero";
    hero.textContent = "Welcome to The Blooming Fork";

    const section = document.createElement("section");
    section.className = "content";

    const heading = document.createElement("h2");
    heading.textContent = "Discover the Taste of Nature";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "At The Blooming Fork, we bring fresh, local ingredients to your plate. Explore the seasons with us and savor the simplicity of farm-to-table dining.";

    section.append(heading, paragraph);
    content.append(hero, section);
}

export { loadHome };