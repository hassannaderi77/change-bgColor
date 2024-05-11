let color = ["red", "blue", "yellow", "green", "blueviolet",
             "chocolate", "darkkhaki", "goldenrod", "darkslategray",
              "magenta", "lightcoral", "plum", "indigo", "aqua"];


let button = document.querySelector(".click");

let body = document.getElementsByTagName("div");

button.addEventListener("click" , bgColor);

function bgColor () {

    let randomColor = Math.floor(Math.random() * color.length);

    let result = color[randomColor];

    body[0].style.backgroundColor = result; 


}




    
    


