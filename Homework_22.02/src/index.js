import "./style.css";
import imageSrc from '../assets/webpack-dev-server-730x410.jpg';

const divCont = document.createElement('div');
document.body.appendChild(divCont);	

const inp = document.createElement('span');
inp.innerText = "Hover over image";
divCont.appendChild(inp);

const img = document.createElement('img');
img.src = imageSrc;
img.setAttribute('alt','webpackLogo')
divCont.appendChild(img);

img.onmouseover = ()=>{
    System.import("./test.js");
}