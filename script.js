let display = document.querySelector("#display ul");

let red1 = Math.floor(Math.random() * 256);
let green1 = Math.floor(Math.random() * 256);
let blue1 = Math.floor(Math.random() * 256);

const rgb = document.getElementById('rgb');
rgb.innerHTML = `rgb(${red1}, ${green1}, ${blue1})`;

function Show(size){
    display.innerHTML = "";
    tryagain.innerHTML= "";
    let c = Math.floor(Math.random() *size);
for(var i=0; i<size; i++){
    let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
const node = document.createElement("li");
    if(i===c){
        node.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;

    }
    else{
node.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;}
node.classList.add("e5");
display.appendChild(node);
}
}

function myFunction(event){
    var x = event.target;
    if(x.style.backgroundColor != `rgb(${red1}, ${green1}, ${blue1})`){
        x.style.backgroundColor = "black";
        tryagain.innerHTML= `Try Again`;
    }
    else{
        let li = document.getElementsByClassName('e5');
        for(var i=0; i<li.length; ++i){
        li[i].style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;
        }
        bgcolors.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;
        tryagain.innerHTML= `Correct!!!`;
        newcolors.innerHTML= `PLAY AGAIN`;

    }

}



