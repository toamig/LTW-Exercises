// 4. Selecting elements

let products = document.getElementsByTagName('form');
console.log(products[0]);

let secondInput = document.querySelector('form :nth-child(2) input');
console.log(secondInput);

let allInputs = document.querySelectorAll('form input');
allInputs.forEach(element => {
    console.log(element);
});

// Html text

let productsHtml = document.getElementsByTagName('form');
console.log(productsHtml[0].outerHTML);

let secondInputHtml = document.querySelector('form :nth-child(2) input');
console.log(secondInputHtml.outerHTML);

let allInputsHtml = document.querySelectorAll('form input');
allInputsHtml.forEach(element => {
    console.log(element.outerHTML);
});

// 5. Events

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function() {
  alert('Submitted!');
  event.preventDefault();
});
 