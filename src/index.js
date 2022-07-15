import loveW from "./assets/lovewtrmln.jpg";
import { log } from "./js/hello";
import "./js/change_theme.js";
import "./sass/main.scss";
import "./js/get_input.js";
import "./js/clear_buttons.js";
import "./js/equals.js";

const mainImage = document.getElementById("mainImage");
mainImage.src = loveW;

const hello = require("./js/hello");

log();
