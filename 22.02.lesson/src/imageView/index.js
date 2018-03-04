import "./style.css";
import small from "../../assets/small.jpg";

export default ()=>{
    const image = document.createElement("img");
    image.src = small;
    image.onclick = ()=>{
        System.import("./test.js");
    }
    document.body.appendChild(image);
}