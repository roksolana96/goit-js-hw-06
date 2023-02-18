
const numberEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberEl.length}`);

console.log('') //(Відступ)

numberEl.forEach(element => {
    console.log (`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);

    console.log('') //(Відступ)

});


