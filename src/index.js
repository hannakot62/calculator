import loveW from "./assets/lovewtrmln.jpg";
import { log } from "./js/hello";
import "./js/change_theme.js";
import "./sass/main.scss";

const mainImage = document.getElementById("mainImage");
mainImage.src = loveW;

const hello = require("./js/hello");

log();
