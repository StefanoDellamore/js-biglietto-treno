//chiedo km all'utente

const km = prompt ('Inserisci Km da percorrere')
const kmInNumber = parseInt (km);

console.log ('km da percorrere:', km, typeof km);
console.log ('kmInNumber', kmInNumber, typeof km)
if (isNaN(km)) {alert('Scrivi i km in numeri!');}

//chiedo età all'utente

const age = prompt ('Inserisci anni')
const ageInNumber = parseInt (age);

console.log ('anni:', age, typeof age);
console.log ('ageInNumber', ageInNumber, typeof age);

//prezzo biglietto base
const price = (kmInNumber * 0.21);
console.log ('price', price, typeof price);

let finalText = 'il prezzo del biglietto è $:';

//verifivo sconto da applicare

if (ageInNumber < 18) {
    
    //applico 20% di sconto
    const discount = (price / 100) * 20;
    console.log ('discount', discount, typeof discount);
    
    //prezzo scontato
    const discountedPrice = price - discount;
    console.log ('discountedPrice', discountedPrice, typeof discountedPrice);
    finalText = finalText + discountedPrice.toFixed(2);
}

else if (ageInNumber > 65) {
    //applico 40% di sconto
    const discount = (price / 100) * 40;
    console.log ('discount', discount, typeof discount);
    
    //prezzo scontato
    const discountedPrice = price - discount;
    console.log ('discountedPrice', discountedPrice, typeof discountedPrice);
    finalText = finalText + discountedPrice.toFixed(2); 
}

else {
    finalText = finalText + price.toFixed(2);
}

const resultContainer = document.querySelector ('#result-container');
console.log ('resultContainer', resultContainer, typeof resultContainer);
resultContainer.innerHTML = finalText;