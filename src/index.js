import './sass/main.scss'
import loveW from './assets/lovewtrmln.jpg'
import { log } from "./js/hello"

const mainImage = document.getElementById("mainImage")
mainImage.src = loveW

const hello = require('./js/hello')

log()