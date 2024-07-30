const normal=["red","blue","green"]
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function(){
    const haxColor=normal[getRandomNumber()];

    color.textContent=haxColor;
    document.body.style.backgroundColor=haxColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*normal.length);
}