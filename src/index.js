import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

loadHome();
homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);