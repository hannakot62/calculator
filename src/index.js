import icon from "./assets/logo.png";
import "./js/change_theme.js";
import "./sass/main.scss";
import "./js/clear_buttons.js";
import { createButtons } from "./js/buttons.js";

const calculatorIcon = document.getElementById("calculatorIcon");
calculatorIcon.href = icon;

document.addEventListener("DOMContentLoaded", createButtons());
