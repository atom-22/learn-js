import "./test.css";

const button = document.createElement("button");
button.innerText = "Cleck Me!";

document.body.appendChild(button);

button.onclick = () => {
    System.import("./imageView").then( (module)=>{
        module.default();
    })
}