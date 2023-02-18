let counterValue = 0;

const decrementElPlus = document.querySelector('button[data-action="decrement"]');
const incrementElPlus = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementElPlus.addEventListener("click", () => {
   console.log (counterValue -= 1);
//    decrementElPlus.addEventListener("click", decrementElPlus);

   valueEl.textContent = counterValue;

  });

  incrementElPlus.addEventListener("click", () => {
    console.log (counterValue += 1);
    
    // incrementElPlus.addEventListener("click", incrementElPlus);
    valueEl.textContent = counterValue;

   });
