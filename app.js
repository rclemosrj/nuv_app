const productPage = document.querySelector('.product-page');

if (productPage) {
  const buyButton = productPage.querySelector('.buy-button');

  if (buyButton) {
    const redirectButton = document.createElement('a');
    redirectButton.textContent = 'Ir para o formulário';
    redirectButton.href = 'https://seuformulario.com';
    redirectButton.target = '_blank';
    buyButton.parentElement.insertBefore(redirectButton, buyButton);
  }
}
