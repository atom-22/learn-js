import "./style.css";
import "./style2.css";
import small from "../../assets/small.jpg";
import big from "../../assets/bigImage.jpg"

const image = document.createElement("img");
image.src = small;

document.body.appendChild(image);

const imageBig = document.createElement("img");
imageBig.src = big;

document.body.appendChild(imageBig);