import icon from "./assets/logo.png";
import { log } from "./js/hello";
import "./js/change_theme.js";
import "./sass/main.scss";
import "./js/get_input.js";
import "./js/clear_buttons.js";
import "./js/equals.js";

const calculatorIcon = document.getElementById("calculatorIcon");
calculatorIcon.href = icon;

const hello = require("./js/hello");

log();
