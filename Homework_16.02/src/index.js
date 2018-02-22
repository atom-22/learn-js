const json  = require('./info.json');
import './style.scss';
import mouse from "../assets/mouse.jpg";

const mouseImg = document.createElement("img");
mouseImg.src = mouse;
document.body.appendChild(mouseImg);

const pTag = document.createElement("p");
pTag.innerText = json.name + " " + json.surname;
document.body.appendChild(pTag);


console.log(json.name);