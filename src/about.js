function loadAbout() {
    const content = document.getElementById("content");
    if (!content) return;

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const section = document.createElement("section");
    section.className = "content";

    const heading = document.createElement("h2");
    heading.textContent = "Our Story";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Founded on the belief that food should be fresh, wholesome, and delicious, The Blooming Fork celebrates the connection between the farm and your plate. We partner with local farmers to bring the best of the season directly to your table.";

    
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2025 The Blooming Fork. All rights reserved.";
    footer.append(p);

    section.append(heading, paragraph);
    content.append(section);
    content.append(footer);
}

export { loadAbout };