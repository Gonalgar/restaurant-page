function loadHome() {
    const content = document.getElementById("content");
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

    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2025 The Blooming Fork. All rights reserved.";
    footer.append(p);

    section.append(heading, paragraph);
    content.append(hero, section);
    content.append(footer);
}

export { loadHome };