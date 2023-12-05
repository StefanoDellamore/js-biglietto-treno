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