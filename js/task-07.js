// const input = document.getElementById("font-size-control");
// const span = document.getElementById("text");
const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", () => {            
    text.style.fontSize = input.value + 'px'           
});

console.log(input)




