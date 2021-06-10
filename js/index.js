// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  
  let valorPrice = price.innerText;
  let newSubtotal = Number(valorPrice) * quantity;
  
  subtotal.innerText = newSubtotal;
  
  return newSubtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll(`.product`);

  let sum = 0;

  allProducts.forEach((product) => {
    updateSubtotal(product);
    sum += parseFloat(product.querySelector('.subtotal span').innerHTML);
    return sum;
  });

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerText = sum;
  console.log(total);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentElement;
  const grandParent = parent.parentElement;
  const greatGrandParent = grandParent.parentElement;

  greatGrandParent.removeChild(grandParent);
}

// ITERATION 5

function createProduct() {
  //... your code goes here :()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);
  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });
});
