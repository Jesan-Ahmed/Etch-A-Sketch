
const container = document.querySelector(".flexbox");
const button = document.querySelector("button");
let darkness = 10;
button.addEventListener("click", ()=>{
        let input = prompt("Number of squares per side: (Max 100)");
        if(input <= 100) grid(input);
    });

function random(){
    return Math.floor(Math.random() * 256);
}

function hover(div){
    div.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    div.style.opacity = darkness;
    div.style.borderStyle = "none";
}

function grid(length){
    container.replaceChildren();
    for(let i = 0; i <length * length; i++){
        const square = document.createElement("div");
        square.style.width = `calc(${100 / length}% )`;
        square.classList.add("box");
        square.addEventListener("mouseenter", ()=>{
             hover(square);
             if (darkness < 100) darkness +=10;
            });
        container.appendChild(square);
    }
}
grid(16);