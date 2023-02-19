function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
let boxesSize = 30;
let amount = 0;

input.addEventListener("input", inputChange);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function inputChange (event) {
  input.setAttribute("count", Number(event.currentTarget.value));
};

function createBoxes () {
  let amount = Number(input.getAttribute("count"));
  console.log(amount);

  for (let i = 0; i < amount; i++) {
    boxesSize += 10;
    const createColorBox = document.createElement("div");
    createColorBox.style.background = getRandomHexColor();
    createColorBox.style.height = boxesSize + "px";
    createColorBox.style.width = boxesSize + "px";
    createColorBox.style.margin = "10px";
    createColorBox.classList.add("new-box");
    boxes.append(createColorBox);

  }
  
};

function destroyBoxes (e) {
  const allCreateColorBox = document.querySelectorAll(".new-box");
    for (let allNewBoxe of allCreateColorBox) {
      boxes.removeChild(allNewBoxe);
      input.value = 0;
    }

};




// input.addEventListener("input", (event) => {
//   input.setAttribute("count", Number(event.currentTarget.value));

// });


// createBtn.addEventListener("click", () =>{
//     let amount = Number(input.getAttribute("count"));
//   console.log(amount);

//   for (let i = 0; i < amount; i++) {
//     boxesSize += 10;
//     const createColorBox = document.createElement("div");
//     createColorBox.style.background = getRandomHexColor();
//     createColorBox.style.height = boxesSize + "px";
//     createColorBox.style.width = boxesSize + "px";
//     createColorBox.style.margin = "10px";
//     createColorBox.classList.add("new-box");
//     boxes.append(createColorBox);
//   }
// });

// destroyBtn.addEventListener("click", () =>{
//   const allCreateColorBox = document.querySelectorAll(".new-box");
//   for (let allNewBoxe of allCreateColorBox) {
//     boxes.removeChild(allNewBoxe);
//     input.value = 0;

//   }

// });








